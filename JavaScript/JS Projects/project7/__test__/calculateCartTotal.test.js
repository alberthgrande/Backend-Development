const { calculateCartTotal } = require("../src/calculateCartTotal");

describe("calculateCartTotal", () => {
  test("should calculate of all total cart items", () => {
    const cart = [
      { name: "Apple", price: 10, quantity: 2 }, // 20
      { name: "Banana", price: 5, quantity: 5 }, // 25
      { name: "Apple", price: 8, quantity: 3 }, // 24 = 69
    ];

    expect(calculateCartTotal(cart)).toBe(69);
  });

  test("should return 0 for empty cart", () => {
    expect(calculateCartTotal([])).toBe(0);
  });
});
