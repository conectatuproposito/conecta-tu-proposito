import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { render } from "@react-email/render";
import ContactTemplate from "./Template";

export type FormData = {
  nombres: string;
  apellidos: string;
  telefono: string;
  email: string;
  message: string;
};

export async function POST(request: NextRequest) {
  const datos: FormData = await request.json();
  const { nombres, apellidos, email, message } = datos;

  const transport = nodemailer.createTransport({
    service: process.env.EMAIL_HOST,
    /* 
      setting service as 'gmail' is same as providing these setings:

      host: "smtp.gmail.com",
      port: 465,
      secure: true

      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL_USER,
    // to: process.env.EMAIL_USER,

    to: process.env.EMAIL_TO,

    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${nombres} ${apellidos} (${email})`,
    text: message,
    html: render(ContactTemplate(datos)),
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
