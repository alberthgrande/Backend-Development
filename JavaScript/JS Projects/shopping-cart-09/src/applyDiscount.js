const applyDiscount = (total, discountPercentage) => {
  const discountAmount = total * (discountPercentage / 100);

  return {
    discountAmount,
    finalTotal: total - discountAmount,
  };
};

module.exports = { applyDiscount };
