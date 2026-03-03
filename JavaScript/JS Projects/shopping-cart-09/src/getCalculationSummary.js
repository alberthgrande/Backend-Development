const { getCartTotal } = require("./getCartTotal");
const { applyDiscount } = require("./applyDiscount");

const getCalculationSummary = (items, discountPercent) => {
  const cartTotal = getCartTotal(items);

  const { discountAmount, finalTotal } = applyDiscount(
    cartTotal,
    discountPercent,
  );

  return {
    cartTotal,
    discountPercent,
    discountAmount,
    finalTotal,
  };
};

module.exports = { getCalculationSummary };
