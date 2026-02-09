import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
// Create a transporter (configure with your email service)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendEmail(to: string, subject: string, body: string) {
  try {
    const info = await transporter.sendMail({
      from:
        process.env.EMAIL_FROM || '"Workflow System" <noreply@workflow.com>',
      to: to,
      subject: subject,
      text: body,
      html: body, // You can also send HTML formatted emails
    });

    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
