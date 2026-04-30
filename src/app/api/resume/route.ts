import { NextRequest, NextResponse } from "next/server";
import { getTransporter, getSMTPConfig } from "@/lib/smtp";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const transporter = getTransporter();
    const { from } = getSMTPConfig();

    // Email to the portfolio owner about resume download
    const ownerMailOptions = {
      from,
      to: from,
      subject: `Resume Downloaded by: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Resume Download Notification</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p style="margin-top: 15px; color: #666;">
              This person downloaded your resume. Consider following up with them!
            </p>
          </div>
        </div>
      `,
    };

    // Confirmation email to the downloader
    const confirmationMailOptions = {
      from,
      to: email,
      subject: "Thank you for your interest - Erick Moti's Resume",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Thank you for your interest! 👋</h2>
          <p>Hi ${name},</p>
          <p>Thank you for downloading my resume. I'm excited about the opportunity to connect with you!</p>
          <p>I've received your contact information and will get back to you soon.</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="margin-top: 0;">My Contact:</h3>
            <p><strong>Email:</strong> erickmoti3609@gmail.com</p>
            <p><strong>Phone:</strong> +254 700 019 012</p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>
          </div>
          <p>Best regards,<br/>Erick Moti</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(confirmationMailOptions);

    console.log(`Resume downloaded by ${name} (${email})`);

    return NextResponse.json(
      { message: "Download registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Resume download email error:", error);
    return NextResponse.json(
      { error: "Failed to process download. Please try again." },
      { status: 500 }
    );
  }
}
