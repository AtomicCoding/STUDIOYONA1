import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, phone, country, zip, message, consent } = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!name || !email || !phone || !message || !consent) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Create email content
    const emailBody = `
New Contact Form Submission – Studio Yona

Name: ${name}
Email: ${email}
Phone: ${phone}
Country: ${country}
Zip: ${zip || 'Not provided'}
Message: ${message}
Consent: ${consent ? 'Yes' : 'No'}
    `.trim();

    // Configure email service
    // This uses environment variables for email configuration
    // You can set these up in Netlify's environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      } : undefined,
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || email,
      to: 'adam@yona.studio',
      subject: 'New Contact Form Submission – Studio Yona',
      text: emailBody,
      replyTo: email,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Email sending error:', error);
    
    // For development, allow submission to proceed even if email fails
    if (process.env.NODE_ENV === 'development') {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Form submitted (email service not configured)' }),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};

export { handler };
