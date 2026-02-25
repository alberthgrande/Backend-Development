function getAgeCategory(age) {
  if (!Number.isFinite(age) || age < 0) {
    throw new Error("Invalid age");
  }

  if (age < 13) return "child";
  if (age <= 19) return "teenager";
  if (age <= 59) return "adult";
  return "senior";
}

module.exports = { getAgeCategory };
