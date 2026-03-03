const { getItemTotal } = require("./getItemTotal");

const getCartTotal = (items) => {
  return items.reduce((total, item) => total + getItemTotal(item), 0);
};

module.exports = { getCartTotal };
