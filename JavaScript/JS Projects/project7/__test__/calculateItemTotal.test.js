const { calculateItemTotal } = require("../src/calculateItemTotal");

describe("calculateItemTotal", () => {
  test("Should multiply price and quantity correctly", () => {
    const item = {
      price: 10,
      quantity: 3,
    };
    expect(calculateItemTotal(item)).toBe(30);
  });

  test("should return 0 if quantity is 0", () => {
    const item = { price: 50, quantity: 0 };
    expect(calculateItemTotal(item)).toBe(0);
  });
});
