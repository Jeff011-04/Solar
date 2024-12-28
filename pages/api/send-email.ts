import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail", // You can use other services like 'Outlook' or 'Yahoo'
        auth: {
          user: process.env.EMAIL_USER, // Make sure these environment variables are in your .env.local file
          pass: process.env.EMAIL_PASS,
        },
      });

      // Enhanced HTML Content for the email body
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; color: #333; background-color: #f8f8f8; padding: 20px; margin: 0;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="font-size: 24px; color: #2c3e50; margin-bottom: 20px; border-bottom: 2px solid #2c3e50; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <p style="font-size: 16px; color: #555; margin-bottom: 10px;">
              <strong style="color: #2c3e50;">Name:</strong> ${name}
            </p>
            <p style="font-size: 16px; color: #555; margin-bottom: 10px;">
              <strong style="color: #2c3e50;">Email:</strong> ${email}
            </p>
            <div style="background-color: #ecf0f1; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <h3 style="font-size: 20px; color: #34495e; margin-bottom: 10px;">Message:</h3>
              <p style="font-size: 16px; color: #555; line-height: 1.6;">
                ${message}
              </p>
            </div>
            <p style="font-size: 14px; color: #888; margin-top: 20px; text-align: center;">
              <a href="mailto:${email}" style="color: #3498db; text-decoration: none; font-weight: bold;">Reply to ${name}</a>
            </p>
            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ecf0f1;" />
            <p style="font-size: 14px; color: #888; text-align: center;">
              <strong>Solar Company</strong> | All rights reserved
            </p>
          </div>
        </div>
      `;

      // Send the email
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_TO,  // The email address where the contact form submissions will be sent
        subject: "New Contact Form Submission",
        html: htmlContent, // Send email as HTML
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
