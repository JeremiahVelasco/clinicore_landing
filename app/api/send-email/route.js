import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();
    const { firstName, lastName, company, email, phone, message } = formData;

    await axios({
      method: 'POST',
      url: 'https://sandbox.api.mailtrap.io/api/send/3544305',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 43fde5f14afc0e76c807de0abc9c8036'
      },
      data: {
        from: {
          email: 'contact@clinicore.io',
          name: 'CliniCore Contact Form'
        },
        to: [
          {
            email: 'velocityssph@gmail.com'
          }
        ],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: `
          Name: ${firstName} ${lastName}
          Company: ${company}
          Email: ${email}
          Phone: ${phone}
          
          Message:
          ${message}
        `,
        category: 'Contact Form Submission'
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', message: error.message },
      { status: 500 }
    );
  }
}