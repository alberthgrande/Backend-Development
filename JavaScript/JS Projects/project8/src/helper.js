const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
};

const closeInterface = () => {
  rl.close();
};

module.exports = { askQuestion, closeInterface };
