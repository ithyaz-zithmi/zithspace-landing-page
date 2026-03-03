import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, company, phone, message } = await request.json();

  if (!name || !email || !company) {
    return NextResponse.json(
      {
        success: false,
        message: "Please provide all required fields (Name, Email, Company).",
      },
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
      replyTo: email,
      subject: `New Demo Request from ${company}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2563eb;">New Demo Request</h2>
          <p>You have received a new demo request from the Zithspace landing page.</p>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong><br />${message || "No message provided."}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">This email was sent automatically from your website's backend.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send demo request." },
      { status: 500 },
    );
  }
}
