const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/orders', require('./order'))
router.use('/reviews', require('./review'))
router.use('/products', require('./products'))
router.use('/lineItems', require('./lineItem') )
router.use('/genres', require('./genres'))
router.use('/addresses', require('./address'))
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
