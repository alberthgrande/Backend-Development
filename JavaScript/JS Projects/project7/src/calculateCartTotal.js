const { calculateItemTotal } = require("./calculateItemTotal");

const calculateCartTotal = (cart) =>
  cart.reduce((total, item) => total + calculateItemTotal(item), 0);

module.exports = { calculateCartTotal };
