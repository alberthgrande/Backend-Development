const { numberClassifier } = require("./numberClassifier");

test("classifies zero correctly", () => {
  expect(numberClassifier(0)).toBe("Zero");
});

test("classifies even numbers correctly", () => {
  expect(numberClassifier(2)).toBe("Even");
  expect(numberClassifier(-4)).toBe("Even");
});

test("classifies odd numbers correctly", () => {
  expect(numberClassifier(3)).toBe("Odd");
  expect(numberClassifier(-5)).toBe("Odd");
});
