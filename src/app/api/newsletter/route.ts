import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json(
      { success: false, message: "Email is required." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_FROM_EMAIL,
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2563eb;">New Newsletter Subscription</h2>
          <p>A new user has subscribed to the newsletter from the Zithspace landing page footer.</p>
          <hr />
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">This email was sent automatically from your website's backend.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process subscription." },
      { status: 500 },
    );
  }
}
