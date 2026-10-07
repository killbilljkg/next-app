import { Resend } from 'resend';
import { mapInterestToAreaOfInterest } from '@/lib/arcaai-lead-api';

function renderRow(label, value) {
  return `
    <tr>
      <td style="padding:8px 0;font-size:13px;color:#6b7280;width:120px;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:8px 0;font-size:14px;color:#111827;font-weight:500;">
        ${value}
      </td>
    </tr>
  `;
}

export async function sendContactEmail({
  firstName,
  lastName,
  email,
  phone,
  interest,
  message,
  leadId,
}) {
  // Prefer CONTACT_RESEND_API_KEY when RESEND_API_KEY is already used for another purpose.
  const apiKey = process.env.CONTACT_RESEND_API_KEY || process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('CONTACT_RESEND_API_KEY (or RESEND_API_KEY) is not configured');
  }

  const resend = new Resend(apiKey);
  const areaOfInterest = mapInterestToAreaOfInterest(interest);
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'ARCA AI Website <onboarding@resend.dev>';

  if (!receiverEmail) {
    throw new Error('CONTACT_RECEIVER_EMAIL is not configured');
  }

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: receiverEmail,
    cc: process.env.CONTACT_CC_EMAIL || undefined,
    reply_to: email,
    subject: `New Contact Form Submission – ${firstName} ${lastName}`,
    text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Interest: ${areaOfInterest}
Lead ID: ${leadId || 'N/A'}
Message: ${message}
    `,
    html: `
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8;padding:24px;font-family:Arial,Helvetica,sans-serif;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
              <tr>
                <td style="background-color:#0f766e;padding:20px 24px;">
                  <h1 style="margin:0;font-size:20px;color:#ffffff;font-weight:600;">
                    New Contact Form Submission
                  </h1>
                </td>
              </tr>
              <tr>
                <td style="padding:24px;">
                  <p style="margin:0 0 16px;color:#374151;font-size:14px;">
                    A new enquiry has been submitted through the website contact form.
                  </p>
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                    ${renderRow('Name', `${firstName} ${lastName}`)}
                    ${renderRow('Email', email)}
                    ${renderRow('Phone', phone)}
                    ${renderRow('Interest', areaOfInterest)}
                    ${leadId ? renderRow('Lead ID', leadId) : ''}
                  </table>
                  <div style="margin-top:24px;">
                    <p style="margin:0 0 8px;font-size:13px;color:#6b7280;font-weight:600;">
                      Message
                    </p>
                    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;padding:12px;font-size:14px;color:#111827;white-space:pre-line;">
                      ${message}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="background:#f9fafb;padding:16px 24px;font-size:12px;color:#6b7280;">
                  This email was generated automatically from the ARCA AI website contact form.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}
