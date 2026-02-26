const askQuestion = require("./helper");
const { numberClassifier } = require("./numberClassifier");

async function main() {
  while (true) {
    try {
      const input = await askQuestion("Input a number: ");
      const number = Number(input);

      if (isNaN(number)) {
        console.log("Please enter a valid number.");
        continue;
      }

      const classification = numberClassifier(number);
      console.log(`The number ${number} is classified as: ${classification}`);
      process.exit(0);
    } catch (error) {
      console.error("Error running main function:", error);
    }
  }
}

main();
