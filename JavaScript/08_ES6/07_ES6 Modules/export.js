/**
 * Export
 *
 * You can export a function or variable from any file
 * Let use create a file named person.js, and fill it with the things we want to export.
 * There are two types of export, Named and Default.
 *
 */

// export const name = "Alberth";
// export const age = 27;

const name = "Alberth";
const age = 27;

export { name, age };

const message = () => {
  const name = "Alberth";
  const age = 27;
  return `My name is ${name} and I'm ${age} years old.`;
};

export default message;
