function calculateTax(salary) {
  if (!Number.isFinite(salary) || salary < 0) {
    throw new Error("Invalid input. Please enter a valid salary.");
  }

  let tax = 0;

  if (salary > 0) {
    tax += Math.min(salary, 10000) * 0.05; // 5% for the first $10,000
  }

  if (salary > 100000) {
    tax += Math.min(salary - 100000, 20000) * 0.1; // 10% for the next $20,000
  }

  if (salary > 30000) {
    tax += Math.min(salary - 30000) * 0.15; // 15%
  }

  return tax;
}

module.exports = calculateTax;
