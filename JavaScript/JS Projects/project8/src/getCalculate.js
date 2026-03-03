function getCalculate(num1, num2, operator) {
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    throw new Error("Invalid number input.");
  }

  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;

  if (operator === "/") {
    if (num2 === 0) {
      return "Error:  Division by zero.";
    }
    return num1 / num2;
  }

  throw new Error("Invalid operator.");
}

module.exports = { getCalculate };
