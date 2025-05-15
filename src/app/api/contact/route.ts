
import { NextResponse } from 'next/server';
import { contactInfo } from '@/lib/data'; // Assuming your email is here

// Define the expected request body structure
interface ContactRequestBody {
  name: string;
  email: string; // Sender's email
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactRequestBody;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields (name, email, message).' }, { status: 400 });
    }

    // Log the received data
    console.log('Contact form submission received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log(`This email would be sent to: ${contactInfo.email}`);

    // TODO: Implement actual email sending logic here.
    // For example, using Nodemailer, SendGrid, Resend, AWS SES, etc.
    // Example structure for an email sending service:
    /*
    try {
      await sendEmail({
        to: contactInfo.email, // Your email address from data.ts
        from: 'your-verified-sender-email@example.com', // A "from" address configured with your email service
        replyTo: email, // Sender's email from the form
        subject: `New contact form submission from ${name}`,
        text: message,
        html: `<p>You have a new contact form submission:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
      });
      return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
    */

    // For now, simulate success
    return NextResponse.json({ message: 'Message received by server. Email sending not yet implemented.' }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}
