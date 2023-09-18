const sendEmail = require("./sendEmail");

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const message = "<p>Please confirm your email by following this link</p>";
  return sendEmail({
    to: email,
    subject: "Email Confirmation",
    html: `<h1>Hello ${name}</h4>
    ${message}
    `,
  });
};

module.exports = sendVerificationEmail;
