// pages/api/send-question.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { question, email } = req.body;

  if (!question || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Configure your email transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., "gmail"
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // The email where you want to receive questions
      subject: `New Question from ${email}`,
      text: `You received a new question: \n\n${question}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}

