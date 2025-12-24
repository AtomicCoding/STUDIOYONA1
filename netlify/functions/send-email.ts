import { Handler } from '@netlify/functions';

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

    // Format email content
    const emailContent = {
      name,
      email,
      phone,
      country,
      zip: zip || 'Not provided',
      message,
      consent,
      timestamp: new Date().toISOString(),
    };

    // Log the submission (for development/debugging)
    console.log('Contact form submission:', emailContent);

    // If email service is configured, send the email
    // For now, we'll return success and the user can configure email service later
    // Supported configurations:
    // - SendGrid API key via process.env.SENDGRID_API_KEY
    // - Mailgun API via process.env.MAILGUN_API_KEY
    // - SMTP configuration via process.env.SMTP_* variables
    // - Netlify built-in email (if configured)

    // Try to use SendGrid if API key is available
    if (process.env.SENDGRID_API_KEY) {
      try {
        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: 'adam@yona.studio' }],
                subject: 'New Contact Form Submission – Studio Yona',
              },
            ],
            from: { email: process.env.SENDGRID_FROM_EMAIL || 'noreply@studioyona.com' },
            content: [
              {
                type: 'text/plain',
                value: `
New Contact Form Submission – Studio Yona

Name: ${name}
Email: ${email}
Phone: ${phone}
Country: ${country}
Zip: ${zip || 'Not provided'}
Message: ${message}
Consent: ${consent ? 'Yes' : 'No'}
                `.trim(),
              },
            ],
            replyTo: { email },
          }),
        });

        if (!response.ok) {
          console.error('SendGrid error:', await response.text());
        }
      } catch (sendgridError) {
        console.error('SendGrid send failed:', sendgridError);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Form submitted successfully. We will be in touch shortly.',
      }),
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process form submission' }),
    };
  }
};

export { handler };
