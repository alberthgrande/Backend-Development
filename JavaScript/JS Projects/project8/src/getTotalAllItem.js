const { getTotalItem } = require("./getTotalItem");

const getTotalAllItem = (items) => {
  return items.reduce((total, item) => {
    return total + getTotalItem(item);
  }, 0);
};

module.exports = { getTotalAllItem };
