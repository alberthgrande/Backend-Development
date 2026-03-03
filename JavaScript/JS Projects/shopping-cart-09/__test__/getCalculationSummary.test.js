const { getCalculationSummary } = require("../src/getCalculationSummary");

describe("getCalculationSummary (integration)", () => {
  it("should calculate real values", () => {
    const items = [
      { price: 100, quantity: 1 },
      { price: 50, quantity: 1 },
    ];

    const result = getCalculationSummary(items, 10);

    expect(result.cartTotal).toBe(150);
    expect(result.discountAmount).toBe(15);
    expect(result.finalTotal).toBe(135);
  });
});
