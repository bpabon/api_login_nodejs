const nodemailer = require('nodemailer');
class EmailService {
    constructor() {
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.SMTP_EMAIL,
              pass: process.env.SMTP_PASSWORD,
            }
          });
    }
    // Enviar correos electrónicos
    async sendMail(to, subject, text) {
        try {
            const mailOptions = {
                from: 'aldair.apv@gmail.com',
                to: to,
                subject: subject,
                text: text
            };
            const rta = await this.transport.sendMail(mailOptions);
            return rta;
        } catch (error) {
            throw Boom.badImplementation(error.message);
        }
    }
}

module.exports = EmailService;