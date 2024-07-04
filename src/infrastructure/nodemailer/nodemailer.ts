import nodemailer from "nodemailer";

export const smtp = nodemailer.createTransport({
  secure: false,
  host: process.env.SMTP_HOST || "",
  port: Number(process.env.SMTP_PORT) || 0,
  auth: {
    user: process.env.SMTP_AUTH_USER || "",
    pass: process.env.SMTP_AUTH_PASS || "",
  },
});
