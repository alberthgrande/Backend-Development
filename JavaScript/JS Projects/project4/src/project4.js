const { askQuestion, closeInterface } = require("./helper");
const { login } = require("./login");

async function main() {
  try {
    const username = await askQuestion("Enter your username: ");
    const password = await askQuestion("Enter your password: ");
    const result = login(username, password);
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    closeInterface();
  }
}

main();
