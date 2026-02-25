function numberClassifier(num) {
  if (num === 0) return "Zero";

  return num % 2 === 0 ? "Even" : "Odd";
}

module.exports = { numberClassifier };
