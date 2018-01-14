const router = require('express').Router();
const { Order, User, LineItem } = require('../db/models');

router.post('/', (req, res, next) => {
    LineItem.findOrCreate({
        where: {
            'userId': req.user.id,
            'orderId': req.body.orderId,
            'productId': req.body.productId
        }
    })
    .then(({instance, wasCreated}) => {
        if(!wasCreated) {
            console.log('exists', instance)
        } else {
            console.log('created', instance)
        }
    })
    .catch(next)
})

router.get('/:orderId', (req, res, next) => {
    LineItem.findAll({
        where: {
            orderId: req.params.orderId
        }
    })
    .then(order => res.json(order))
    .catch(next)
})

module.exports = router;