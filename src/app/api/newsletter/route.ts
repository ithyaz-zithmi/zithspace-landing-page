import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "@/lib/db";

export async function POST(request: Request) {
  try {
    // Robust body parsing
    const body = await request.json().catch(() => ({}));
    const { email } = body;

    // Type validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 },
      );
    }

    const sanitizedEmail = email.toLowerCase().trim();

    // Store in demo_requests database with UPSERT logic
    try {
      const dbQuery = `
        INSERT INTO demo_requests (name, email, message, status)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (email) DO UPDATE SET 
          updated_at = CURRENT_TIMESTAMP,
          status = 'pending'
      `;
      const dbValues = [
        "Footer Subscriber", 
        sanitizedEmail, 
        "Newsletter subscription from footer", 
        "pending"
      ];
      await pool.query(dbQuery, dbValues);
      console.log(`Newsletter subscription saved to DB for: ${sanitizedEmail}`);
    } catch (dbError) {
      console.error("Database Error (Newsletter):", dbError);
      // We continue to send the email notification even if DB insertion fails
    }

    // SMTP Configuration with safety fallbacks
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailFrom = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;
    const mailTo = process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER;

    if (!mailTo) {
      throw new Error("Missing SMTP recipient configuration");
    }

    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || 'ZithSpace Notification'}" <${mailFrom}>`,
      to: mailTo,
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2563eb;">New Newsletter Subscription</h2>
          <p>A new user has subscribed to the newsletter from the Zithspace landing page footer.</p>
          <hr />
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">This entry has also been recorded in the demo_requests database.</p>
        </div>
      `,
    });

    console.log(`Newsletter subscription email sent for: ${sanitizedEmail}`);
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Newsletter Processing Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "An internal server error occurred. Please try again later.",
        error: error.message || "Unknown Error"
      },
      { status: 500 },
    );
  }
}
