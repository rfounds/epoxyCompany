import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail password or app-specific password
      },
    });
    
    // Format the form data into a readable email
    const formatFormData = (data) => {
      let formattedData = '';
      for (const key in data) {
        formattedData += `<strong>${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> ${data[key]}<br/>`;
      }
      return formattedData;
    };
    
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT, // Where to send the form data
      subject: `New Quote Request from ${formData.name}`,
      html: `
        <h1>New Quote Request</h1>
        <p>You have received a new quote request from your website.</p>
        <div style="background-color: #f6f6f6; padding: 20px; border-radius: 5px; margin: 20px 0;">
          ${formatFormData(formData)}
        </div>
        <p>Please respond to this customer at your earliest convenience.</p>
      `,
    };
    
    // Send the email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true, message: 'Your quote request has been sent successfully! We will contact you shortly.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send your request. Please try again later.' },
      { status: 500 }
    );
  }
}
