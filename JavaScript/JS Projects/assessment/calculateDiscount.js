function calculateDiscount(price, discountPercent) {
  const discount_amount = price * (discountPercent / 100);
  const total_price = price - discount_amount;

  return total_price;
}

const finalAmount = calculateDiscount(1000, 10);

console.log(finalAmount);
