const askQuestion = require("./helper.js");
const { getAgeCategory } = require("./ageClassifier.js");

async function main() {
  while (true) {
    try {
      const input = await askQuestion("What is your age? ");
      const age = Number(input);

      if (!Number.isFinite(age) || age < 0) {
        console.log("Please enter a valid non-negative number for age.");
        continue;
      }

      const category = getAgeCategory(age);
      console.log(`You are a ${category}.`);
      //   break;
      process.exit(0);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  }
}

main();
