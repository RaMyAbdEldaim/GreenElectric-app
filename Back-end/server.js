// server.js - الكود النهائي المعدل لـ Bluehost
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// ====== Middleware ======
app.use(express.json());

// CORS للإنتاج على Bluehost
app.use(cors({
  origin: [
    "https://gepms.com",          
    "https://www.gepms.com",    
    "http://localhost:5173"
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

// خدمة الـ Static files من الـ Front-end
app.use(express.static(path.join(__dirname, "../Front-end/dist")));

// ====== Rate Limiter ======
const sendLimiter = rateLimit({
  windowMs: 60 * 1000, // دقيقة
  max: 10, // بحد أقصى 10 طلبات
  message: { success: false, message: "Too many requests — try again later." },
});
app.use("/send", sendLimiter);

// ====== إعداد SMTP ======
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// تحقق من إعداد الإيميل
transporter.verify()
  .then(() => console.log("✅ SMTP Ready"))
  .catch(err => console.error("❌ SMTP Error:", err));

// ====== التحقق من صحة الإيميل ======
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ====== المسار الرئيسي للإرسال ======
app.post("/send", async (req, res) => {
  const { name, email, country, message } = req.body;

  // التحقق من البيانات
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format." });
  }

  try {
    // إرسال الرسالة
    const info = await transporter.sendMail({
      from: `"Green Electric" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || "infogekwt@gmail.com",
      subject: `New Message from ${name}`,
      text: `
You have a new contact form submission:

Name: ${name}
Email: ${email}
Country: ${country || "Not provided"}
Message: ${message}
      `,
    });

    console.log("📩 Email sent:", info.messageId);
    res.json({ success: true, message: "Email sent successfully!" });

  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

// ====== جميع الطلبات الأخرى تروح للـ Front-end ======
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Front-end/dist/index.html"));
});

// ====== تشغيل السيرفر ======
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Frontend: https://ge-kwt.com`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
});