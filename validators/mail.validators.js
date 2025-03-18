const { body } = require('express-validator');
const ApiError = require('../exceptions/api-error');

const send_mail_validator = [
	body('to').isEmail().withMessage('Valid recipient email is required'),
	body('from').isString().notEmpty().withMessage('From is required'),
	body('subject').isString().notEmpty().withMessage('Subject is required'),
	body('html').optional().isString().withMessage('HTML body must be a string'),
	body('text').optional().isString().withMessage('Text body must be a string'),
	body().custom(body => {
		if (!body.html && !body.text) {
			throw ApiError.BadRequest('Either `html` or `text` must be provided');
		}
		return true;
	})
];

module.exports = { send_mail_validator };
