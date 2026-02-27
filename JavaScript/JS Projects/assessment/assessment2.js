function calculateTotal(price, quantity) {
  let total = price * quantity;
  return total;
}

function seasonalDiscount(total) {
  if (total > 100) {
    return total * 0.9;
  }

  return total * 0.95;
}

function loyaltyDiscount(total, isLoyalCustomer) {
  if (isLoyalCustomer) {
    return total * 0.95;
  }
  return total;
}

// let totalAmount = calculateTotal(120, 2);
// let afterSeason = seasonalDiscount(totalAmount);
// let finalAmount = loyaltyDiscount(afterSeason, true);

const finalAmount = loyaltyDiscount(
  seasonalDiscount(calculateTotal(120, 2)),
  true,
);

console.log("Final Amount: ", finalAmount);
