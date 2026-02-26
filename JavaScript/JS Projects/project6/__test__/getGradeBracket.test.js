const { getGradeBracket } = require("../src/getGradeBracket");

describe("getGradeBracket function", () => {
  test("should return 'A' for grades greater than or equal to 90", () => {
    expect(getGradeBracket(90)).toBe("A");
  });

  test("should return 'B' for grades between 80 and 90", () => {
    expect(getGradeBracket(85)).toBe("B");
  });

  test("should return 'C' for grade between 70 and 79", () => {
    expect(getGradeBracket(70)).toBe("C");
  });

  test("should return 'F' for grades below 60", () => {
    expect(getGradeBracket(50)).toBe("F");
  });

  test("should throw error for invalid input", () => {
    expect(() => getGradeBracket(-5)).toThrow(
      "Invalid input. Please enter a valid grade.",
    );
    expect(() => getGradeBracket("abc")).toThrow(
      "Invalid input. Please enter a valid grade.",
    );

    expect(() => getGradeBracket(105)).toThrow(
      "Invalid input. Please enter a valid grade.",
    );
  });
});
