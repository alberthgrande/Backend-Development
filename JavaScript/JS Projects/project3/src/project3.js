const { askQuestion } = require("./helper");
const getSalaryDetails = require("./getSalaryDetails");

async function main() {
  try {
    const input = await askQuestion("Enter a salary: ");
    const salaryInput = Number(input);

    if (!Number.isFinite(salaryInput) || salaryInput < 0) {
      console.error("Invalid salary");
      process.exit(1);
    }

    const salaryDetails = getSalaryDetails(salaryInput);
    console.log(salaryDetails);

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
