// ============================================================
// src/app/api/contact/route.ts
// API route that handles contact form submissions.
// Uses Nodemailer + Gmail App Password to send emails.
//
// Setup:
//   1. Create a Gmail App Password:
//      https://myaccount.google.com/apppasswords
//   2. Add EMAIL_USER, EMAIL_PASS, EMAIL_TO to your .env.local
//   3. Add the same vars to Vercel → Project Settings → Environment Variables
// ============================================================

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // Build the Nodemailer transporter using Gmail + App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // 16-char App Password (not your real password)
      },
    })

    // Email that lands in your inbox
    await transporter.sendMail({
      from:    `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to:      process.env.EMAIL_TO,
      replyTo: email,          // so you can Reply directly to the sender
      subject: `[Portfolio] New message from ${name}`,
      text:    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0f; color: #f0f4ff; padding: 24px; border-radius: 8px;">
          <h2 style="color: #00e5ff; margin-bottom: 16px;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #00e5ff;">${email}</a></p>
          <hr style="border-color: rgba(255,255,255,0.1); margin: 16px 0;" />
          <p><strong>Message:</strong></p>
          <p style="line-height: 1.7; color: #9ca3c4;">${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
