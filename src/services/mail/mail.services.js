const nodemailer = require('nodemailer');
const { config } = require('../../config/config');
const Boom = require('@hapi/boom');
const TemplatesEmailsService = require('./template/mail.templates');
const handlebars = require('handlebars');
class EmailService {
    constructor() {
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
              user: config.smtpEmail,
              pass: config.smtpPassword, 
            }
          });
    }
    // Enviar correos electrónicos
    async sendMail(to, subject, data) {
        try {
            const templateService = new TemplatesEmailsService();
            const template = handlebars.compile(templateService.recoveryPassword());
            const htmlTemplate = template(data);
            const mailOptions = {
                from: config.smtpEmail,
                to: to,
                subject: subject,
                html: htmlTemplate
            };
            const rta = await this.transport.sendMail(mailOptions);
            return rta;
        } catch (error) {
            throw Boom.badImplementation(error.message);
        }
    }
}

module.exports = EmailService;