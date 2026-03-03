const { applyDiscount } = require("../src/applyDiscount");

describe("applyDiscount", () => {
  test("should return 10% discount for total > 50", () => {
    const result = applyDiscount(60);

    expect(result.discountRate).toBe(0.1);
    expect(result.finalTotal).toBe(54);
  });

  test("should return 20% discount for total > 100", () => {
    const result = applyDiscount(150);

    expect(result.discountRate).toBe(0.2);
    expect(result.finalTotal).toBe(120);
  });

  test("should apply VIP extra 5%", () => {
    const result = applyDiscount(150, "VIP");
    expect(result.discountRate).toBe(0.25);
    expect(result.finalTotal).toBe(112.5);
  });

  test("should enable free shipping if the total > 200", () => {
    const result = applyDiscount(500);

    expect(result.freeShipping).toBe(true);
  });

  test("should throw error for negative total", () => {
    expect(() => {
      applyDiscount(-10).toThrow("Invalid Total Amount");
    });
    expect(() => {
      applyDiscount("abc").toThrow();
    });
  });
});
