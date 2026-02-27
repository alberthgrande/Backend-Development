const cart = [
  { name: "Laptop", price: 120, quantity: 2 },
  { name: "Mouse", price: 25, quantity: 3 },
  { name: "Keyboard", price: 45, quantity: 1 },
];

function calculateTotal(price, quantity) {
  return price * quantity;
}

function seasonalDiscount(total) {
  if (total > 100) {
    return total * 0.9;
  }

  return total * 0.95;
}

function loyalDiscount(total, isLoyalCustomer) {
  if (isLoyalCustomer) {
    return total * 0.95;
  }

  return total;
}

// let grandTotal = 0;

// for (const item of cart) {
//   grandTotal += loyalDiscount(
//     seasonalDiscount(calculateTotal(item.price, item.quantity)),
//     true,
//   );
// }

// console.log("Grand Total:", grandTotal);

const isLoyalCustomer = true;

const grandTotalOptimized = cart
  .map((item) => calculateTotal(item.price, item.quantity))
  .map(seasonalDiscount)
  .map((total) => loyalDiscount(total, isLoyalCustomer))
  .reduce((sum, total) => sum + total, 0);

console.log("grand Total (Optimized): ", grandTotalOptimized);
