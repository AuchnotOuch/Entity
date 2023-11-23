const router = require('express').Router();
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const institutionsRouter = require("./institutions.js")
const groupsRouter = require('./groups.js')
const communitiesRouter = require('./communities.js')
const membershipsRouter = require('./memberships.js')
const enrollmentsROuter = require('./enrollments.js')
const followsRouter = require("./follows.js")
const chatsRouter = require("./chat.js")
const chatMessageRouter = require("./chatmessage.js")
const classroomRouter = require("./classroom.js")
const commentRouter = require('./comment.js')
const councilRouter = require('./council.js')
const councilMemberRouter = require('./councilmember.js')
const experienceRouter = require('./experience.js')
const likesRouter = require('./likes.js')
const participantRouter = require('./participant.js')
const placesRouter = require('./place.js')
const pollsRouter = require('./poll.js')
const pollHistoryRouter = require('./pollhistory.js')
const pollOptionRouter = require('./polloption.js')
const portfolioRouter = require('./portfolio.js')
const postsRouter = require('./posts.js')
const privateMessageRouter = require('./privatemessage.js')
const spotsRouter = require('./spot.js')
const studentsRouter = require('./student.js')

const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser)

router.use('/session', sessionRouter)

router.use('/users', usersRouter)

router.use('/institutions', institutionsRouter)

router.use('/groups', groupsRouter)

router.use('/communities', communitiesRouter)

router.use('/memberships', membershipsRouter)

router.use('/enrollments', enrollmentsROuter)

router.use('/follows', followsRouter)

router.use('/chat', chatsRouter)

router.use('/chatmessage', chatMessageRouter)

router.use('/classroom', classroomRouter)

router.use('/comments', commentRouter)

router.use('/council', councilRouter)

router.use('/councilmember', councilMemberRouter)

router.use('/experience', experienceRouter)

router.use('/likes', likesRouter)

router.use('/participant', participantRouter)

router.use('/places', placesRouter)

router.use('/polls', pollsRouter)

router.use('/pollhistory', pollHistoryRouter)

router.use('/polloption', pollOptionRouter)

router.use('/portfolio', portfolioRouter)

router.use('/posts', postsRouter)

router.use('/privatemessage', privateMessageRouter)

router.use('/spots', spotsRouter)

router.use('/students', studentsRouter)

module.exports = router;
