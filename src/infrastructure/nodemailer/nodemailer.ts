import nodemailer from "nodemailer";

export const smtp = nodemailer.createTransport({
  secure: false,
  host: process.env.PRIVATE_SMTP_HOST || "",
  port: Number(process.env.PRIVATE_SMTP_PORT) || 0,
  auth: {
    user: process.env.PRIVATE_SMTP_AUTH_USER || "",
    pass: process.env.PRIVATE_SMTP_AUTH_PASS || "",
  },
});
