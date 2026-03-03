const { getCalculationSummary } = require("./getCalculationSummary");

const items = [
  { name: "Apple", price: 10, quantity: 2 },
  { name: "Orange", price: 10, quantity: 2 },
];

const summary = getCalculationSummary(items, 10);

console.log(summary);
