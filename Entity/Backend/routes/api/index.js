const router = require('express').Router();
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const institutionsRouter = require("./institutions.js")
const groupsRouter = require('./groups.js')
const communitiesRouter = require('./communities.js')
const membershipsRouter = require('./memberships.js')
const enrollmentsROuter = require('./enrollments.js')
const followsRouter = require("./follows.js")
const { restoreUser } = require('../../utils/auth.js')

router.use(restoreUser)

router.use('/session', sessionRouter)

router.use('/users', usersRouter)

router.use('/institutions', institutionsRouter)

router.use('/groups', groupsRouter)

router.use('/communities', communitiesRouter)

router.use('/memberships', membershipsRouter)

router.use('/enrollments', enrollmentsROuter)

router.use('/follows', followsRouter)

module.exports = router;
