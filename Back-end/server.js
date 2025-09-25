// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// إعداد الـ transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:'infogekwt@gmail.com',
    pass: "vlnq qhcn ktlo rnwu", 
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Error:", error);
  } else {
    console.log("SMTP Ready ✅");
  }
});

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Green Electric" <${process.env.EMAIL_USER}>`,
      to: 'infogekwt@gmail.com', 
      subject: `New Message from ${name}`,
      text: `
        You have a new contact form submission:

        👤 Name: ${name}
        📧 Email: ${email}
        📝 Message: ${message}
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
