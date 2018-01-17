const router = require('express').Router();
const { Order, User, LineItem , Product} = require('../db/models');

router.post('/', (req, res, next) => {
    LineItem.findOrCreate({
        where: {
            'productId': req.body.productId,
            'orderId': req.body.orderId,
            'price':req.body.price,
            'quantity':req.body.quantity
        }
    })
    .then((instance, wasCreated) => {
        if(!wasCreated) {
            console.log('exists', instance)
        } else {
            console.log('created', instance)
        }res.json(instance)
    })
    // .then(data => res.json(data))
    .catch(next)
})

router.get('/:orderId', (req, res, next) => {
    LineItem.findAll({
        include: [{
            model: Product
        }],
        where: {
            orderId: req.params.orderId
        }
    })
    .then(order => res.json(order))
    .catch(next)
})

module.exports = router;


