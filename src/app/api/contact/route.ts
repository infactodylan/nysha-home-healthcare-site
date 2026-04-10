import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_LEN = 4000;

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const from = process.env.SENDGRID_FROM_EMAIL;
  const to = process.env.QUOTE_LEAD_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Set SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, and QUOTE_LEAD_TO_EMAIL.",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid JSON body.");
  }

  if (!body || typeof body !== "object") {
    return badRequest("Invalid payload.");
  }

  const { name, email, phone, careFor, message } = body as Record<
    string,
    unknown
  >;

  const nameStr = typeof name === "string" ? name.trim() : "";
  const emailStr = typeof email === "string" ? email.trim() : "";
  const phoneStr = typeof phone === "string" ? phone.trim() : "";
  const careForStr = typeof careFor === "string" ? careFor.trim() : "";
  const messageStr = typeof message === "string" ? message.trim() : "";

  if (!nameStr || nameStr.length > 200) {
    return badRequest("Please enter a valid name.");
  }
  if (!emailStr || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
    return badRequest("Please enter a valid email address.");
  }
  if (phoneStr.length > 40) {
    return badRequest("Phone number is too long.");
  }
  if (!careForStr || careForStr.length > 80) {
    return badRequest("Please select who care is for.");
  }
  if (!messageStr || messageStr.length > MAX_LEN) {
    return badRequest("Please enter a message (shorter is fine).");
  }

  sgMail.setApiKey(apiKey);

  const text = [
    `New contact form submission — Rosie Personal Care Services`,
    ``,
    `Name: ${nameStr}`,
    `Email: ${emailStr}`,
    `Phone: ${phoneStr || "(not provided)"}`,
    `Care for: ${careForStr}`,
    ``,
    `Message:`,
    messageStr,
  ].join("\n");

  const html = `
    <h2>New contact — Rosie Personal Care Services</h2>
    <p><strong>Name:</strong> ${escapeHtml(nameStr)}</p>
    <p><strong>Email:</strong> ${escapeHtml(emailStr)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phoneStr || "(not provided)")}</p>
    <p><strong>Care for:</strong> ${escapeHtml(careForStr)}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(messageStr)}</pre>
  `;

  try {
    await sgMail.send({
      to,
      from,
      replyTo: emailStr,
      subject: `Rosie Personal Care — message from ${nameStr}`,
      text,
      html,
    });
  } catch (err) {
    console.error("SendGrid error", err);
    return NextResponse.json(
      { error: "Could not send email. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
