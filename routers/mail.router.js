const express = require('express')
const { validationResult } = require('express-validator')
const router = express.Router()
const MailService = require('../services/mail.service')
const {
	send_mail_validator,
	send_mail_with_smtp_validator
} = require('../validators/mail.validators')

router.post('/send-mail', send_mail_validator, async (req, res, next) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		await MailService.sendMail(req.body)
		res.status(200).json({ message: 'Email sent successfully' })
	} catch (error) {
		next(error)
	}
})

router.post(
	'/send-mail/with-smtp',
	send_mail_with_smtp_validator,
	async (req, res, next) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		try {
			await MailService.sendMailWithSmtp(req.body)
			res
				.status(200)
				.json({ message: 'Email sent successfully with custom SMTP settings' })
		} catch (error) {
			next(error)
		}
	}
)

module.exports = router
