const sendEmail = require("./sendEmail");

const sendResetPasswordEmail = async ({
  name,
  email,
  passwordToken,
  origin,
}) => {
  const verificationURL = `${origin}/user/reset-password?token=${passwordToken}&email=${email}`;

  const message = `<p>Reset your password bay following this link</p>
   <a href="${verificationURL}">RESET PASSWORD</a>`;

  return sendEmail({
    to: email,
    subject: "Password reset",
    html: `<h1>Hello ${name}</h4>
    ${message}
    `,
  });
};

module.exports = sendResetPasswordEmail;
