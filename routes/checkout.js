const express = require('express');
const router  = express.Router();

router.post('/', (req, res) => {
  const { itemId, itemName, itemDescription, itemPrice, quantity } = req.body;

  if (!req.session.items) {
    req.session.items = [];
  }

  req.session.items.push(req.body);
  console.log('checkout session', req.session);
  res.json(req.session.items);
});

router.get('/', (req, res) => {

  if (!req.session.items) {
    req.session.items = [];
  }

  console.log('checkout session GET', req.session);
  res.json(req.session.items);
});

module.exports = router;
