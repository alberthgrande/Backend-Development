function calculateTotal(price, quantity) {
  let total = price * quantity;

  return total;
}

function applyDiscount(total) {
  return total * 0.9;
}

let totalAmount = calculateTotal(100, 2);
let finalAmount = applyDiscount(totalAmount);

console.log("Final Amount: ", finalAmount);
