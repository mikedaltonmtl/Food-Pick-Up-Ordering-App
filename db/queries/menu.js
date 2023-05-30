// const db = require('../connection');

const getMenu = () => {
  // return db.query('SELECT * FROM menu_items ORDER BY id ASC;')
  //   .then(data => {
  //     return data.rows;
  //   });
  return [
    {
      name: 'Pink Sprinkle',
      img: 'pink_sprinkle.jpg',
      price: 249,
      description: 'Iconic pink frosting, topped with sprinkles.',
      preparation_time: 15
    },
    {
      name: 'Nutty Chocolate',
      img: 'choc_n_nut.jpg',
      price: 199,
      description: 'Chocolate glaze, topped with nuts.',
      preparation_time: 15
    },
    {
      name: 'Sugar Top',
      img: 'sugar_top.jpg',
      price: 149,
      description: 'Topped with powdered sugar.',
      preparation_time: 10
    },
    {
      name: 'Pumpkin Spice',
      img: 'pumpkin_spice.jpg',
      price: 299,
      description: 'Pumpkin spice flavored donut.',
      preparation_time: 10
    },
    {
      name: 'Maple Glaze',
      img: 'maple_glaze.jpg',
      price: 199,
      description: 'Coated with a maple glaze.',
      preparation_time: 10
    },
    {
      name: 'Cinnamon Apple',
      img: 'cinnamon_apple.jpg',
      price: 249,
      description: 'Cinnamon apple flavored donut.',
      preparation_time: 15
    },
    {
      name: 'Honey Cruller',
      img: 'honey_cruller.jpg',
      price: 329,
      description: 'Better glaze.',
      preparation_time: 10
    },
    {
      name: 'Boston Cream',
      img: 'boston_cream.jpg',
      price: 349,
      description: 'Chocolate with a cream filled centre.',
      preparation_time: 15
    },
    {
      name: 'Chocolate',
      img: 'chocolate.jpg',
      price: 299,
      description: 'Simple chocolate donut.',
      preparation_time: 15
    },
    {
      name: 'Chocolate Sprinkle',
      img: 'choc_sprinkle.jpg',
      price: 299,
      description: 'Chocolate glaze, topped with sprinkles.',
      preparation_time: 10
    },
    {
      name: 'Double Choc',
      img: 'double_choc.jpg',
      price: 399,
      description: 'Chocolate glaze, topped with chocolate chunks.',
      preparation_time: 20
    },
    {
      name: 'Vanilla Sprinkle',
      img: 'vanilla_sprinkle.jpg',
      price: 199,
      description: 'Vanilla flavored donut.',
      preparation_time: 10
    },
    {
      name: 'Assortment of 4',
      img: '4-pack.jpg',
      price: 499,
      description: 'Assortment of 4 donuts.',
      preparation_time: 15
    },
    {
      name: 'Assortment of 6',
      img: '6-pack.jpg',
      price: 599,
      description: 'Assortment of 6 donuts.',
      preparation_time: 20
    },
    {
      name: 'Assortment of 12',
      img: '6-pack.jpg',
      price: 999,
      description: 'Assortment of 12 donuts.',
      preparation_time: 20
    },
  ]
};

module.exports = { getMenu };
