const axios = require('axios')

async function apiKeyMiddleware(req, res, next) {
	const authHeader = req.headers['authorization']
	if (!authHeader) {
		return res.status(401).json({ error: 'Authorization header missing' })
	}

	const [scheme, apiKey] = authHeader.split(' ')

	if (scheme !== 'ApiKey' || !apiKey) {
		return res
			.status(401)
			.json({ error: 'Invalid authorization header format' })
	}

	try {
		const response = await axios.get(
			`${process.env.IJ_DASHBOARD_URL}/api/auth/findKey?key=${apiKey}`
		)

		if (response.status !== 200 || !response.data.uId) {
			return res.status(401).json({ error: 'Invalid API key' })
		}


		next()
	} catch (error) {
		console.error('Error during API key validation:', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

module.exports = apiKeyMiddleware
