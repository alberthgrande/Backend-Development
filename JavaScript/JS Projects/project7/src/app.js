const { calculateCartTotal } = require("./calculateCartTotal");
const { applyDiscount } = require("./applyDiscount");
const { displaySummary } = require("./displaySummary");

const cart = [
  { name: "Apple", price: 10, quantity: 2 }, // 20
  { name: "Banana", price: 5, quantity: 5 }, // 25
  { name: "Apple", price: 8, quantity: 3 }, // 24
];

async function main() {
  try {
    const total = calculateCartTotal(cart);
    const discountResult = applyDiscount(total, "REGULAR");

    displaySummary(cart, total, discountResult);
  } catch (error) {
    console.error("An error occurred.", error.message);
  }
}

main();
