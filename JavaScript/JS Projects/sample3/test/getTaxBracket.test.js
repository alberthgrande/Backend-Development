const getTaxBracket = require("../src/getTaxBracket");

describe("getTaxBracket function", () => {
  test("should return '5%' for salary less than or equal to 10000", () => {
    expect(getTaxBracket(8000)).toBe("5%");
    expect(getTaxBracket(10000)).toBe("5%");
  });

  test("should return '10%' for salary greater than 10000 and less than or equal to 30000", () => {
    expect(getTaxBracket(15000)).toBe("10%");
    expect(getTaxBracket(30000)).toBe("10%");
  });

  test("should return '15%' for salary greater than 30000", () => {
    expect(getTaxBracket(40000)).toBe("15%");
  });

  test("should return 'Invalid input. Please enter a valid salary.' for negative salary", () => {
    expect(() => getTaxBracket(-5000)).toThrow(
      "Invalid input. Please enter a valid salary.",
    );
  });

  test("should return 'Invalid input. Please enter a valid salary.' for non-numeric input", () => {
    expect(() => getTaxBracket("abc")).toThrow(
      "Invalid input. Please enter a valid salary.",
    );
    expect(() => getTaxBracket(null)).toThrow(
      "Invalid input. Please enter a valid salary.",
    );
    expect(() => getTaxBracket(undefined)).toThrow(
      "Invalid input. Please enter a valid salary.",
    );
  });
});
