const { askQuestion, closeInterface } = require("./helper");
const { getGradeBracket } = require("./getGradeBracket");

async function main() {
  try {
    const grade = Number(await askQuestion("Enter a grade: "));

    const result = getGradeBracket(grade);
    console.log(result);
  } catch (error) {
    console.error("An error occured: ", error.message);
  } finally {
    closeInterface();
  }
}

main();
