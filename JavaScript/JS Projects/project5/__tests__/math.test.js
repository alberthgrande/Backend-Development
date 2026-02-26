const { analyzeNumbers } = require("../src/math");

describe("analyzeNumbers", () => {
  test("should find largest and smallest correctly", () => {
    const result = analyzeNumbers(10, 25, 15);

    expect(result.largest).toBe(25);
    expect(result.smallest).toBe(10);
    expect(result.allEqual).toBe(false);
  });

  test("should detect all numbers equal", () => {
    const result = analyzeNumbers(5, 5, 5);

    expect(result.largest).toBe(5);
    expect(result.smallest).toBe(5);
    expect(result.allEqual).toBe(true);
  });

  test("should work with negative numbers", () => {
    const result = analyzeNumbers(-1, -5, -3);

    expect(result.largest).toBe(-1);
    expect(result.smallest).toBe(-5);
    expect(result.allEqual).toBe(false);
  });
});
