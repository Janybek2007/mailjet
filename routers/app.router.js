const { Router } = require('express')
const MailRouter = require('./mail.router')
const router = Router()

router.use(MailRouter)

module.exports = router
