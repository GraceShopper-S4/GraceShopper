const router = require('express').Router()
const {User, Order, LineItem} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  if(req.user && req.user.isAdmin) {
    User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
      .then(users => res.json(users))
      .catch(next)
  } else {
    res.send('AW HELL NA')
  }

})
router.get('/:id', (req, res, next) => {
  //if(req.user && req.user.isAdmin) {
    User.findOne({
      where: {id: req.params.id},
      include: [{
        model: Order,
        include: [{
          model: LineItem
        }],
        where: {
          userId: req.params.id,
        }
      }]
    })
    .then(user => res.json(user))
    .catch(next)
  //} 
 
})

