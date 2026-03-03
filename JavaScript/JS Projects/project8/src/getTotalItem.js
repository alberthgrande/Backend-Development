const getTotalItem = (item) => {
  return item.price * item.quantity;
};

module.exports = { getTotalItem };
