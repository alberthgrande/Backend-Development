const { formatItemName } = require("../src/formatItemName");

describe("formatItemName", () => {
  test("should trim and uppercase name", () => {
    expect(formatItemName(" apple ")).toBe("APPLE");
  });

  test("should convert the number to string", () => {
    expect(formatItemName(123)).toBe("123");
  });
});
