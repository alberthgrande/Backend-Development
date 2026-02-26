const calaculateTax = require("./calculateTax");
const getTaxBracket = require("./getTaxBracket");

function getSalaryDetails(salary) {
  const tax = calaculateTax(salary);
  const taxBracket = getTaxBracket(salary);

  return {
    grossSalary: salary,
    tax,
    netSalary: salary - tax,
    taxBracket,
  };
}

module.exports = getSalaryDetails;
