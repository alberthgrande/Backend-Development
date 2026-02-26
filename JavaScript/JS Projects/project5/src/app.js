const { askQuestion, closeInterface } = require("./helper");
const { analyzeNumbers } = require("./math");

async function main() {
  try {
    const a = Number(await askQuestion("Enter a number1: "));
    const b = Number(await askQuestion("Enter a number2: "));
    const c = Number(await askQuestion("Enter a number3: "));

    const result = analyzeNumbers(a, b, c);

    console.log(`Largest: ${result.largest}`);
    console.log(`Smallest: ${result.smallest}`);
    console.log(
      result.allEqual ? "All numbers are equal." : "Not all numbers are equal.",
    );

    console.log("Analysis result:", result);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    closeInterface();
  }
}

main();
