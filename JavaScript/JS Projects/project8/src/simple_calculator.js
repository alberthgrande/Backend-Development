const { askQuestion, closeInterface } = require("./helper");
const { getCalculate } = require("./getCalculate");

async function main() {
  try {
    const num1 = Number(await askQuestion("Input num1: "));
    const num2 = Number(await askQuestion("Input num2: "));
    const operator = await askQuestion("Input operator: ");

    let result = getCalculate(num1, num2, operator);

    console.log("Result : ", result);
  } catch (error) {
    console.error("An error occurred: ", error.message);
  } finally {
    closeInterface();
  }
}

main();
