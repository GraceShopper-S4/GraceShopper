const router = require("express").Router();
const { Address } = require("../db/models");

router.post("/", (req, res, next) => {
  Address.findOrCreate({
    where: {
      shippingCity: req.body.shippingCity,
      shippingState: req.body.shippingState,
      shippingZipCode: req.body.shippingZipCode,
      billingCity: req.body.billingCity,
      billingState: req.body.billingState,
      billingZipCode: req.body.billingZipCode
    }
  })
    .then((instance, wasCreated) => {
      res.json(instance);
    })
    .catch(next);
});

module.exports = router;
