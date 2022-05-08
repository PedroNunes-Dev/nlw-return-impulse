import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fbf262b6e5116f",
      pass: "881ef06eb7c4fe"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {

        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Pedro Nunes <adm.pedronunes@hotmail.com>',
            subject,
            html: body,
        });
    };
}