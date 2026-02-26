const { getAgeCategory } = require("./ageClassifier");

test("classifies children", () => {
  expect(getAgeCategory(5)).toBe("child");
  expect(getAgeCategory(12)).toBe("child");
});

test("classifies teenagers", () => {
  expect(getAgeCategory(13)).toBe("teenager");
  expect(getAgeCategory(19)).toBe("teenager");
});

test("classifies adults", () => {
  expect(getAgeCategory(20)).toBe("adult");
  expect(getAgeCategory(59)).toBe("adult");
});

test("classifies seniors", () => {
  expect(getAgeCategory(60)).toBe("senior");
  expect(getAgeCategory(100)).toBe("senior");
});

test("throws error for invalid ages", () => {
  expect(() => getAgeCategory(-1)).toThrow("Invalid age");
  expect(() => getAgeCategory(NaN)).toThrow("Invalid age");
});
