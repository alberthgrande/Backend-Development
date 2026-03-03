const { getTotalAllItem } = require("./getTotalAllItem");

const items = [
  { name: "Apple", price: 10, quantity: 2 },
  { name: "Orange", price: 5, quantity: 3 },
];

console.log(getTotalAllItem(items));
