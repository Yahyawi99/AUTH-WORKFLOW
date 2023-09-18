const nodemailer = require("nodemailer");

const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "nya.moore@ethereal.email",
      pass: "6gaXZZFfB2UeezPNtB",
    },
  });

  const info = await transporter.sendMail({
    from: "Yassin Yahyawi <deidarayassin45@gmail.com>",
    to: "yassinyahyawi26@gmail.com",
    subject: "Auth-worflow tutorial",
    html: "<b>Hello tutorial</b>",
  });
};

module.exports = sendEmail;
