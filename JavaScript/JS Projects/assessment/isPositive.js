function isPositive(num) {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

console.log(isPositive(5));
console.log(isPositive(-3));
console.log(isPositive(0));
