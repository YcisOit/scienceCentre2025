import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rsiacvarye@gmail.com',
      pass: 'igffzlghcptvotfg'  // ⚠️ Use App Password (not your Gmail password)
    }
  });

  const mailOptions = {
    from: email,
    to: 'rsiacvarye@gmail.com',
    subject: `New Inquiry from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email send error:', err);
    return new Response(JSON.stringify({ error: 'Email send failed' }), { status: 500 });
  }
}
