const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/orders', require('./order'))
router.use('/reviews', require('./review'))
router.use('/', require('./products'))
router.use('/lineItems', require('./lineItem') )

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
