

import nodemailer from "nodemailer";

export const sendAdminNotification = async ({ storeName, location, category }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Seller Application - Fashion App",
      html: `
        <h2>New Seller Application</h2>
        <p><strong>Store Name:</strong> ${storeName}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>Login to review the application.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error };
  }
};
