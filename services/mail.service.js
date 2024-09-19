const nodemailer = require('nodemailer')

class MailService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: parseInt(process.env.SMTP_PORT, 10),
			secure: parseInt(process.env.SMTP_PORT, 10) === 465,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD
			}
		})
	}

	async sendMail(body) {
		const smpt_user = process.env.SMTP_USER
		const mailOptions = {
			from: `${body.from}  <${smpt_user}>`,
			to: body.to,
			subject: body.subject,
			...(body.html && { html: body.html }),
			...(body.text && { text: body.text })
		}

		await this.transporter.sendMail(mailOptions)
	}
	async sendMailWithSmtp(body) {
		const { smtp, ...mailData } = body
		const transporter = nodemailer.createTransport({
			host: smtp.host,
			port: parseInt(smtp.port, 10),
			secure: smtp.port === 465,
			auth: {
				user: smtp.user,
				pass: smtp.pass
			}
		})

		const mailOptions = {
			from: `${mailData.from} <${smtp.user}>`,
			to: mailData.to,
			subject: mailData.subject,
			...(mailData.html && { html: mailData.html }),
			...(mailData.text && { text: mailData.text })
		}

		await transporter.sendMail(mailOptions)
	}
}

module.exports = new MailService()
