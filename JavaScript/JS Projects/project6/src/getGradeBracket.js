function getGradeBracket(grade) {
  if (!Number.isFinite(grade) || grade <= 0 || grade > 100) {
    throw new Error("Invalid input. Please enter a valid grade.");
  }

  if (grade >= 90) return "A";
  else if (grade >= 80) return "B";
  else if (grade >= 70) return "C";
  else if (grade >= 60) return "D";
  else return "F";
}

module.exports = { getGradeBracket };
