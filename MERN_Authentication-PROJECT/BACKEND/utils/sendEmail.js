import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, html, text }) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"Your App Name" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text,
        html,
    };

    await transporter.sendMail(mailOptions);
};

export default sendEmail;