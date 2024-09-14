require('dotenv').config()
const express = require('express')
const cors = require('cors')
const errorMiddleware = require('./middlewares/err-middleware')
const responses = require('./responses/index')

var app = express()
const PORT = process.env.PORT || 4200

app.use(
	cors({
		origin: '*',
		credentials: true
	})
)
app.use(errorMiddleware)
app.use(express.urlencoded({ extended: true }))

app.get('/json-doc', (req, res) => {
	res.json(responses)
})

app.use('/api', require('./routers/app.router'))

app.listen(PORT, console.log(`listening at ${PORT}`))
