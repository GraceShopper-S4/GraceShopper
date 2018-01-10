const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/orders', require('./order'))
router.use('/reviews', require('./review'))
// JM - make the route /produtcs
router.use('/', require('./products'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
