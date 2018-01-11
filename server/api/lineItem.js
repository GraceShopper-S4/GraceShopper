const router = require('express').Router();
const { Order, User, LineItem } = require('../db/models');

router.post('/', (req, res, next) => {
    LineItem.create(req.body)
    .then(item => res.json(item))
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