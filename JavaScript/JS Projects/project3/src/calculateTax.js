function calculateTax(salary) {
  if (!Number.isFinite(salary) || salary < 0) {
    throw new Error("Invalid input. Please enter a valid salary.");
  }

  let tax = 0;

  // First 10,000 → 5%
  tax += Math.min(salary, 10000) * 0.05; // 5%

  // Next 20,000 (10,001–30,000) → 10%
  if (salary > 10000) {
    tax += Math.min(salary - 10000, 20000) * 0.1; // 10%
  }

  // Above 30,000 → 15%
  if (salary > 30000) {
    tax += Math.min(salary - 30000) * 0.15; // 15%
  }

  return tax;
}

module.exports = calculateTax;
