function salaryRange(salary) {
  let tax = 0;

  if (!Number.isFinite(salary) || salary < 0) {
    console.error("Invalid input. Please enter a valid salary.");
    process.exit(1);
  }

  // First 0–10,000 at 5%
  if (salary > 0) {
    let amount = Math.min(salary, 10000);
    tax += amount * 0.05;
  }

  // Next 10,001–30,000 at 10%
  if (salary > 10000) {
    let amount = Math.min(salary - 10000, 20000);
    tax += amount * 0.1;
  }

  // Above 30,000 at 15%
  if (salary > 30000) {
    let amount = salary - 30000;
    tax += amount * 0.15;
  }

  let netSalary = salary - tax;
  console.log(`Gross Salary: ${salary}`);
  console.log(`Tax: ${tax}`);
  console.log(`Net Salary: ${netSalary}`);

  return { salary, tax, netSalary };
}

module.exports = { salaryRange };
