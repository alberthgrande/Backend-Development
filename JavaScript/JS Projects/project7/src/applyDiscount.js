const discountRules = [
  { min: 200, rate: 0.25 },
  { min: 100, rate: 0.2 },
  { min: 50, rate: 0.1 },
];

const applyDiscount = (total, userType = "REGULAR") => {
  if (!Number.isFinite(total) || total < 0) {
    throw new Error("Invalid Total Amount.");
  }

  let discountRate = 0;

  // Base discount
  const rule = discountRules.find((r) => total > r.min);
  if (rule) {
    discountRate = rule.rate;
  }

  // EXTRA VIP DISCOUNT (5%)
  if (userType === "VIP") {
    discountRate += 0.05;
  }

  const discountAmount = total * discountRate;
  const finalTotal = Number((total - discountAmount).toFixed(2));

  return {
    originalAmount: total,
    discountRate: Number(discountRate.toFixed(2)),
    discountAmount: Number(discountAmount.toFixed(2)),
    finalTotal,
    freeShipping: total > 200,
    userType,
  };
};

module.exports = { applyDiscount };
