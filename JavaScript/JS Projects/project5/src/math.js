function analyzeNumbers(a, b, c) {
  let largest,
    smallest,
    allEqual = false;

  // largest
  if (a >= b && a >= c) {
    largest = a;
  } else if (b >= a && b >= c) {
    largest = b;
  } else {
    largest = c;
  }

  // smallest
  if (a <= b && a <= c) {
    smallest = a;
  } else if (b <= a && b <= c) {
    smallest = b;
  } else {
    smallest = c;
  }

  // all equal
  if (a === b && b === c) {
    allEqual = true;
  }

  return { largest, smallest, allEqual };
}
module.exports = { analyzeNumbers };
