import { NextResponse } from 'next/server';
import { DemoRequest, DemoRequestResponse } from '@/types/demo';
import pool from '@/lib/db';
import nodemailer from 'nodemailer';

// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Send email notification
async function sendDemoRequestEmail(demoRequest: DemoRequest) {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL_TO,
      subject: 'New Demo Request - ZithSpace',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Demo Request Received</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${demoRequest.name}</p>
            <p><strong>Email:</strong> ${demoRequest.email}</p>
            ${demoRequest.company ? `<p><strong>Company:</strong> ${demoRequest.company}</p>` : ''}
            ${demoRequest.phone ? `<p><strong>Phone:</strong> ${demoRequest.phone}</p>` : ''}
            ${demoRequest.message ? `<p><strong>Message:</strong> ${demoRequest.message}</p>` : ''}
          </div>
          <p style="margin-top: 20px; font-size: 14px; color: #666;">
            Request received on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Demo request email sent successfully');
  } catch (error) {
    console.error('Error sending demo request email:', error);
    // Don't throw error, just log it, as the demo request is still saved
  }
}

// Save demo request to database
async function saveDemoRequest(demoRequest: DemoRequest): Promise<DemoRequest> {
  try {
    // Get default status from status_configs table
    const defaultStatusResponse = await pool.query(
      'SELECT name FROM status_configs WHERE is_default = true LIMIT 1'
    );
    
    // Use default status if exists, otherwise use empty string
    const defaultStatus = defaultStatusResponse.rows.length > 0 
      ? defaultStatusResponse.rows[0].name 
      : '';

    const query = `
      INSERT INTO demo_requests (name, email, company, phone, message, status)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, name, email, company, phone, message, status, created_at, updated_at
    `;
    
    const values = [
      demoRequest.name,
      demoRequest.email,
      demoRequest.company || null,
      demoRequest.phone || null,
      demoRequest.message || null,
      defaultStatus
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Database error saving demo request:', error);
    throw new Error('Failed to save demo request to database');
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json<DemoRequestResponse>({
        success: false,
        message: 'Name and email are required',
        error: 'MISSING_REQUIRED_FIELDS'
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json<DemoRequestResponse>({
        success: false,
        message: 'Invalid email format',
        error: 'INVALID_EMAIL'
      }, { status: 400 });
    }

    // Create demo request object
    const demoRequest: DemoRequest = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company?.trim() || undefined,
      phone: body.phone?.trim() || undefined,
      message: body.message?.trim() || undefined,
    };

    // Save to database
    const savedRequest = await saveDemoRequest(demoRequest);

    // Send email notification
    await sendDemoRequestEmail(savedRequest);

    return NextResponse.json<DemoRequestResponse>({
      success: true,
      message: 'Demo request submitted successfully! We will contact you soon.',
      data: savedRequest
    }, { status: 201 });

  } catch (error) {
    console.error('Error processing demo request:', error);
    
    // Check for unique constraint violation (duplicate email)
    if (error instanceof Error && error.message.includes('unique constraint')) {
      return NextResponse.json<DemoRequestResponse>({
        success: false,
        message: 'A demo request with this email already exists',
        error: 'DUPLICATE_EMAIL'
      }, { status: 409 });
    }

    return NextResponse.json<DemoRequestResponse>({
      success: false,
      message: 'Failed to submit demo request. Please try again.',
      error: 'INTERNAL_ERROR'
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const query = `
      SELECT id, name, email, company, phone, message, status, created_at, updated_at
      FROM demo_requests
      ORDER BY created_at DESC
      LIMIT 50
    `;
    
    const result = await pool.query(query);
    
    return NextResponse.json({
      success: true,
      data: result.rows
    });

  } catch (error) {
    console.error('Error fetching demo requests:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch demo requests',
      error: 'INTERNAL_ERROR'
    }, { status: 500 });
  }
}
