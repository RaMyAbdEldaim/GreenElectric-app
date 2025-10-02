require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// Middleware
app.use(express.json());
app.use(cors({ origin: [FRONTEND_URL] }));

// Simple rate limiter for /send to avoid abuse
const sendLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // max 10 requests per minute per IP
  message: { success: false, message: "Too many requests — try again later." },
});
app.use("/send", sendLimiter);

// Transporter using SMTP (recommended)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App password (no spaces)
  },
});

// verify transporter
transporter
  .verify()
  .then(() => console.log("SMTP Ready ✅"))
  .catch((err) => console.error("SMTP Error:", err));

// simple email validator
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post("/send", async (req, res) => {
  const { name, email, country, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format." });
  }

  try {
    await transporter.sendMail({
      from: `"Green Electric" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      text: `
You have a new contact form submission:

Name: ${name}
Email: ${email}
Country: ${country || "Not provided"}
Message: ${message}
      `,
    });

    return res.json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    return res.status(500).json({ success: false, message: "Error sending email" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
