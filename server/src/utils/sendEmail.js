const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "los11g12@gmail.com",
    pass: "twoicbufixqlcgis",
  },
});

exports.sendMail = async function (usermail, code) {
  try {
    const imagePath = path.join(__dirname, "image.png");
    const imageBase64 = fs.readFileSync(imagePath).toString("base64");

    const mailOptions = {
      from: "los11g12@gmail.com",
      to: usermail,
      subject: "Your Confirmation Code",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
        <div style="text-align: center;">
          <h2 style="color: #2c3e50;">Confirm Your Email</h2>
          <p style="font-size: 18px; color: #555;">Use the code below to verify your email address:</p>
          <h1 style="color: #e74c3c; font-size: 32px; margin: 20px 0;">${code}</h1>
          <p style="font-size: 14px; color: #777;">If you didn't request this, please ignore this email.</p>
          <img src="cid:image1" alt="Email Banner" style="width:100%; border-radius: 10px;">
        </div>
      </div>
      `,
      attachments: [
        {
          filename: "image.png",
          content: imageBase64,
          encoding: "base64",
          cid: "image1",
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(" Email sent:", info.messageId);
} catch (error) {
    console.error("Error sending email:", error);
  }
};
