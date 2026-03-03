const { getCalculate } = require("../src/getCalculate");

describe("getCalculate", () => {
  test("adds numbers", () => {
    expect(getCalculate(5, 5, "+")).toBe(10);
  });

  test("throws error for string numbers", () => {
    expect(() => getCalculate("5", "5", "+")).toThrow();
  });

  test("throws for invalid operator", () => {
    expect(() => getCalculate(5, 5, 5)).toThrow("Invalid operator");
  });
});
