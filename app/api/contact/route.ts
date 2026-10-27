import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, message } = await req.json();

    if (!name?.trim() || !email?.trim()) {
      return Response.json({ error: "Name and email are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"DreX CFO Website" <${process.env.GMAIL_USER}>`,
      to: "Haroon1662@drexfinancialadvisors.com",
      replyTo: email,
      subject: `New consultation request — ${name}${company ? ` · ${company}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#0B1E3F;">
          <h2 style="margin-bottom:24px;">New consultation request</h2>
          <table style="border-collapse:collapse;width:100%;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;width:120px;color:#5C6E89;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.1em;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;">${name}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#5C6E89;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.1em;">Company</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;">${company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#5C6E89;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.1em;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;"><a href="mailto:${email}" style="color:#4A7FB8;">${email}</a></td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding:10px 0;color:#5C6E89;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.1em;vertical-align:top;">Message</td>
              <td style="padding:10px 0;line-height:1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>` : ""}
          </table>
          <p style="margin-top:32px;font-size:0.8rem;color:#9DB8D8;">Sent via drexcfo.com contact form</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("[contact] email error:", err);
    return Response.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
