
import { NextResponse } from 'next/server';
import { contactInfo } from '@/lib/data';
import { Resend } from 'resend';

// Define the expected request body structure
interface ContactRequestBody {
  name: string;
  email: string; // Sender's email
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);
// Note: It's good practice to use a more specific "from" address once you verify your domain with Resend.
// For now, 'onboarding@resend.dev' is a default that works for testing.
// Replace this with your verified domain email like 'noreply@yourdomain.com' or 'contact@yourdomain.com'
const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';


export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactRequestBody;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields (name, email, message).' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key is not configured. Email will not be sent.');
      return NextResponse.json({ message: 'Email service is not configured on the server.' }, { status: 500 });
    }

    // Log the received data
    console.log('Contact form submission received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log(`Attempting to send email to: ${contactInfo.email} from: ${fromEmail}`);

    try {
      const { data, error } = await resend.emails.send({
        from: `Contact Form <${fromEmail}>`, // Example: 'Acme <onboarding@resend.dev>'
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

      if (error) {
        console.error('Resend API Error:', error);
        return NextResponse.json({ message: 'Failed to send email due to Resend API error.', error: error.message }, { status: 500 });
      }

      console.log('Email sent successfully via Resend:', data);
      return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

    } catch (emailError: any) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json({ message: 'Failed to send email.', error: emailError.message || 'Unknown email error' }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Error processing contact form:', error);
    if (error instanceof SyntaxError) {
        return NextResponse.json({ message: 'Invalid JSON in request body.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Internal server error.', error: error.message || 'Unknown error' }, { status: 500 });
  }
}
