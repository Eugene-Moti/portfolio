import nodemailer from "nodemailer";

// Create a reusable transporter instance with connection pooling
// This reuses the SMTP connection across requests for better performance
const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    pool: true, // Enable connection pooling
    maxConnections: 5, // Maximum number of concurrent connections
    maxMessages: 100, // Maximum messages per connection
    rateDelta: 1000, // Rate limit: 1 second between messages
    rateLimit: 5, // Maximum 5 messages per rateDelta
  });

  // Verify connection on initialization (optional but helpful for debugging)
  transporter.verify((err, success) => {
    if (err) {
      console.error("SMTP Connection Error:", err);
    } else {
      console.log("SMTP Server ready for connections");
    }
  });

  return transporter;
};

// Singleton transporter instance
let transporter: nodemailer.Transporter | null = null;

export const getTransporter = () => {
  if (!transporter) {
    transporter = createTransporter();
  }
  return transporter;
};

export const getSMTPConfig = () => ({
  from: process.env.SMTP_FROM || "erickmoti3609@gmail.com",
  user: process.env.SMTP_USER || "erickmoti3609@gmail.com",
});
