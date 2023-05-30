const express = require('express');
const router  = express.Router();
const menuQueries = require('../db/queries/menu');

router.get('/', (req, res) => {
  const items = menuQueries.getMenu();
  res.json({ items });
  // menuQueries.getMenu()
  //   .then(items => {
  //     console.log('items', items);
  //     res.json({ items });
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
});

module.exports = router;
