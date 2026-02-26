const { askQuestion } = require("./helper");
const salaryRange = require("./salaryRange");

async function main() {
  try {
    const input = await askQuestion("Enter a salary: ");
    const salaryInput = Number(input);

    if (!Number.isFinite(salaryInput) || salaryInput < 0) {
      console.error("Invalid input. Please enter a valid salary.");
      process.exit(1);
    }

    salaryRange(salaryInput);

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
