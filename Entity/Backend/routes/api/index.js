const router = require('express').Router();
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const institutionsRouter = require("./institutions.js")
const groupsRouter = require('./groups.js')
const { restoreUser } = require('../../utils/auth.js')

router.use(restoreUser)

router.use('/session', sessionRouter)

router.use('/users', usersRouter)

router.use('/institutions', institutionsRouter)

router.use('/groups', groupsRouter)

module.exports = router;
