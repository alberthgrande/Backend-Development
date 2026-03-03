const { calculateItemTotal } = require("./calculateItemTotal");
const { formatItemName } = require("./formatItemName");

const displaySummary = (cart, total, discountResult) => {
  console.log("\nShopping Cart Summary\n");

  for (const item of cart) {
    console.log(
      `${formatItemName(item.name)} x${item.quantity} = ${calculateItemTotal(item)}
            `,
    );
  }

  console.log("\nTotal before discount:", total);
  console.log("Discount rate:", discountResult.discountRate);
  console.log("Discount amount:", discountResult.discountAmount);
  console.log("Total after discount:", discountResult.finalTotal);
  console.log("Free shipping:", discountResult.freeShipping ? "YES" : "NO");
  console.log("User Type:", discountResult.userType);
};

module.exports = { displaySummary };
