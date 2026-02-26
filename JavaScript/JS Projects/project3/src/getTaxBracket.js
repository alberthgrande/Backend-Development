function getTaxBracket(salary) {
  if (!Number.isFinite(salary) || salary < 0) {
    throw new Error("Invalid input. Please enter a valid salary.");
  }

  if (salary <= 10000) return "5%";
  if (salary <= 30000) return "10%";
  return "15%";
}

module.exports = getTaxBracket;
