const calculateTax = require("../src/calculateTax");

describe("calculateTax function", () => {
  test("should calculate tax correctly for salary less than or equal to 10000", () => {
    expect(calculateTax(8000)).toBe(400); // 5% of 8000
    expect(calculateTax(10000)).toBe(500); // 5% of 10000
  });

  test("should calculate tax correctly for salary greater than 10000 and less than or equal to 30000", () => {
    expect(calculateTax(15000)).toBe(750); // 5% of 10000 + 10% of (15000 - 10000)
    expect(calculateTax(30000)).toBe(2000); // 5% of 10000 + 10% of (30000 - 10000)
  });

  test("should calculate tax correctly for salary greater than 30000", () => {
    expect(calculateTax(40000)).toBe(3500); // 5% of 10000 + 10% of 20000 + 15% of (40000 - 30000)
  });

  test("should throw an error for negative salary", () => {
    expect(() => calculateTax(-5000)).toThrow(
      "Invalid input. Please enter a valid salary.",
    );
  });

  test("should throw an error for non-numeric input", () => {
    expect(() => calculateTax("abc")).toThrow(
      "Invalid input. Please enter a valid salary.",
    );
    expect(() => calculateTax(null)).toThrow(
      "Invalid input. Please enter a valid salary.",
    );
    expect(() => calculateTax(undefined)).toThrow(
      "Invalid input. Please enter a valid salary.",
    );
  });
});
