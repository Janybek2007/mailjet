const express = require('express')
const { body, validationResult } = require('express-validator')
const router = express.Router()
const MailService = require('../services/mail.service')
const ApiError = require('../exceptions/api-error')

router.post(
	'/send-mail',
	[
		body('to').isEmail().withMessage('Valid recipient email is required'),
		body('from').isString().notEmpty().withMessage('From is required'),
		body('subject').isString().notEmpty().withMessage('Subject is required'),
		body('html')
			.optional()
			.isString()
			.withMessage('HTML body must be a string'),
		body('text')
			.optional()
			.isString()
			.withMessage('Text body must be a string'),
		body().custom(body => {
			if (!body.html && !body.text) {
				throw ApiError.BadRequest('Either `html` or `text` must be provided')
			}
			return true
		})
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		try {
			await MailService.sendMail(req.body)
			res.status(200).json({ message: 'Email sent successfully' })
		} catch (error) {
			res
				.status(error.status || 500)
				.json({ message: error.message, errors: error.errors || [] })
		}
	}
)

module.exports = router
