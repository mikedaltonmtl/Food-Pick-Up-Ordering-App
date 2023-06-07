const express = require('express');
const router  = express.Router();

router.post('/', (req, res) => {
  const { itemName, itemDescription, itemPrice, quantity } = req.body;

  if (!req.session.items) {
    req.session.items = [];
  }

  /**
   * Check if the cart already contains the item,
   * if yes, recalculate the quantity
   * if no, add the item with the given quantity
   */
  let foundInCart = false;

  for (const item of req.session.items) {
    if (item.itemName === req.body.itemName) {
      foundInCart = true;

      let newQuantity = +item.quantity + +req.body.quantity;
      let newSubTotal = newQuantity * (+item.itemPrice.slice(3) / +item.quantity);

      item.quantity = newQuantity;
      item.itemPrice = 'CA$' + newSubTotal.toFixed(2);
    }
  }

  if (!foundInCart) {
    req.session.items.push(req.body);
  }

  console.log('checkout session', req.session);
  res.json(req.session.items);
});


router.get('/', (req, res) => {

  if (!req.session.items) {
    req.session.items = [];
  }

  // console.log('checkout session GET', req.session);
  res.json(req.session.items);
});

module.exports = router;
