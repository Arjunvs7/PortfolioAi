
import { NextResponse } from 'next/server';
import { contactInfo } from '@/lib/data';
import { Resend } from 'resend';

// Define the expected request body structure
interface ContactRequestBody {
  name: string;
  email: string; // Sender's email
  message: string;
}

// Default "from" email for Resend if RESEND_FROM_EMAIL is not set
const FROM_EMAIL_DEFAULT = 'onboarding@resend.dev';


export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactRequestBody;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields (name, email, message).' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || FROM_EMAIL_DEFAULT;

    if (!apiKey) {
      console.error('Resend API key is not configured. Email will not be sent.');
      return NextResponse.json({ message: 'Email service is not configured on the server.' }, { status: 500 });
    }

    // Initialize Resend client here, inside the handler
    const resend = new Resend(apiKey);

    // Log the received data
    console.log('Contact form submission received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log(`Attempting to send email to: ${contactInfo.email} from: ${fromEmail}`);

    try {
      const { data, error: resendError } = await resend.emails.send({
        from: `Contact Form <${fromEmail}>`, 
        to: [contactInfo.email], // Your email address from data.ts
        reply_to: email, // Sender's email from the form
        subject: `New contact form submission from ${name}`,
        html: `<p>You have a new contact form submission:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, '<br>')}</p>`,
        text: `You have a new contact form submission:\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      });

      if (resendError) {
        console.error('Resend API Error:', resendError);
        return NextResponse.json({ message: 'Failed to send email due to Resend API error.', error: resendError.message }, { status: 500 });
      }

      console.log('Email sent successfully via Resend:', data);
      return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

    } catch (emailCatchError: any) {
      console.error('Email sending failed (catch block):', emailCatchError);
      return NextResponse.json({ message: 'Failed to send email.', error: emailCatchError.message || 'Unknown email error' }, { status: 500 });
    }

  } catch (requestError: any) {
    console.error('Error processing contact form:', requestError);
    if (requestError instanceof SyntaxError) {
        return NextResponse.json({ message: 'Invalid JSON in request body.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Internal server error.', error: requestError.message || 'Unknown error' }, { status: 500 });
  }
}
