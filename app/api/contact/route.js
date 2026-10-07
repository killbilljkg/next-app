import { createLead, mapInterestToAreaOfInterest } from '@/lib/arcaai-lead-api';
import { sendContactEmail } from '@/lib/contact-email';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-\s()]{7,}$/;

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      interest,
      message,
    } = body;

    if (!firstName || !lastName || !email || !phone || !interest || !message) {
      return Response.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return Response.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!phoneRegex.test(phone)) {
      return Response.json(
        { message: 'Invalid phone number' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return Response.json(
        { message: 'Message is too short' },
        { status: 400 }
      );
    }

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      interest,
      message: message.trim(),
      areaOfInterest: mapInterestToAreaOfInterest(interest),
    };

    const leadResult = await createLead({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      phoneNumber: payload.phone,
      areaOfInterest: payload.areaOfInterest,
      message: payload.message,
    });

    try {
      await sendContactEmail({
        ...payload,
        leadId: leadResult.leadId,
      });
    } catch (emailError) {
      console.error('Contact form email failed after lead creation', {
        errorMessage: emailError?.message,
        leadId: leadResult.leadId,
        source: '/api/contact',
      });
    }

    return Response.json({
      success: true,
      leadId: leadResult.leadId,
      message: leadResult.message,
    });
  } catch (error) {
    console.error('Contact form submission failed', {
      errorMessage: error?.message,
      hasClientId: Boolean(process.env.ARCAAI_CLIENT_ID),
      hasClientSecret: Boolean(process.env.ARCAAI_CLIENT_SECRET),
      apiBaseUrl: process.env.ARCAAI_API_BASE_URL || 'https://aracaai.crmlitez.in',
      source: '/api/contact',
    });

    return Response.json(
      { message: 'Something went wrong while submitting the form. Please try again later.' },
      { status: 500 }
    );
  }
}
