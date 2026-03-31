{
  // map()
  const numbers = [1, 2, 3, 4];

  const result = numbers.map((n) => n * 2);

  console.log(result);
}

{
  const steps = [1200, 8500, 10000, 7000, 4000, 15000, 3000];

  const result = steps
    .map((n) => n / 1000)
    .filter((n) => n > 7)
    .reduce((total, n) => total + n, 0);

  console.log(result);

  /* 
1200 / 1000 = 1.2 > 7 false
8500 / 1000 = 8.5 > 7 true
10000 / 1000 = 10 > 7 true
7000 / 1000 = 7 > 7 false
4000 / 1000 = 4 > 7 false
15000 / 1000 = 15 > 7 true
3000 / 1000 = 3 > 7 false

8500 / 1000 = 8.5 > 7 true
10000 / 1000 = 10 > 7 true
15000 / 1000 = 15 > 7 true

8.5 + 10 = 18.5 
18.5 + 15 = 33.5

answer : 33.5
*/
}

{
  const activity = [
    { day: "Mon", steps: 1200, calories: 220 },
    { day: "Tue", steps: 8500, calories: 500 },
    { day: "Wed", steps: 10000, calories: 550 },
    { day: "Thu", steps: 7000, calories: 400 },
    { day: "Fri", steps: 4000, calories: 300 },
    { day: "Sat", steps: 15000, calories: 700 },
    { day: "Sun", steps: 3000, calories: 250 },
  ];

  const result = activity
    .map((day) => ({ ...day, stepK: day.steps / 1000 }))
    .filter((day) => day.stepK > 7 && day.calories > 500)
    .reduce((total, day) => total + day.calories, 0);
  console.log(result);
}

{
  const activity = [
    { day: "Mon", steps: 1200, calories: 220, distanceKm: 1 },
    { day: "Tue", steps: 8500, calories: 500, distanceKm: 6 },
    { day: "Wed", steps: 10000, calories: 550, distanceKm: 7 },
    { day: "Thu", steps: 7000, calories: 400, distanceKm: 5 },
    { day: "Fri", steps: 4000, calories: 300, distanceKm: 3 },
    { day: "Sat", steps: 15000, calories: 700, distanceKm: 10 },
    { day: "Sun", steps: 3000, calories: 250, distanceKm: 2 },
  ];

  const result = activity
    .map((day) => ({ ...day, stepK: day.steps / 1000 }))
    .filter((day) => day.stepK >= 8 || day.calories >= 600)
    .map((day) => ({
      day: day.day,
      stepK: day.stepK,
      distanceKm: day.distanceKm,
      score: day.stepK * 2 + day.calories / 100,
    }))
    .reduce((total, n) => total + n.score, 0);

  console.log(`total score: ${result}`);

  /*
  [
  { day: 'Mon', steps: 1200, calories: 220, distanceKm: 1, stepK: 12 },
  { day: 'Tue', steps: 8500, calories: 500, distanceKm: 6, stepK: 85 },
  {
    day: 'Wed',
    steps: 10000,
    calories: 550,
    distanceKm: 7,
    stepK: 100
  },
  { day: 'Thu', steps: 7000, calories: 400, distanceKm: 5, stepK: 70 },
  { day: 'Fri', steps: 4000, calories: 300, distanceKm: 3, stepK: 40 },
  {
    day: 'Sat',
    steps: 15000,
    calories: 700,
    distanceKm: 10,
    stepK: 150
  },
  { day: 'Sun', steps: 3000, calories: 250, distanceKm: 2, stepK: 30 }
]
  */

  /*
[
  { day: 'Tue', steps: 8500, calories: 500, distanceKm: 6, stepK: 8.5 },
  { day: 'Wed', steps: 10000, calories: 550, distanceKm: 7, stepK: 10 },
  {
    day: 'Sat',
    steps: 15000,
    calories: 700,
    distanceKm: 10,
    stepK: 15
  }
]
*/

  /*
[
  { day: 'Tue', stepK: 8.5, distanceKm: 6, score: 22 },
  { day: 'Wed', stepK: 10, distanceKm: 7, score: 25.5 },
  { day: 'Sat', stepK: 15, distanceKm: 10, score: 37 }
]
  */

  /*
total score: 84.5
*/
}

{
  const weeklyActivity = [
    { day: "Mon", steps: 1200, calories: 220, distanceKm: 1, waterL: 1 },
    { day: "Tue", steps: 8500, calories: 500, distanceKm: 6, waterL: 2 },
    { day: "Wed", steps: 10000, calories: 550, distanceKm: 7, waterL: 2.5 },
    { day: "Thu", steps: 7000, calories: 400, distanceKm: 5, waterL: 1.5 },
    { day: "Fri", steps: 4000, calories: 300, distanceKm: 3, waterL: 1 },
    { day: "Sat", steps: 15000, calories: 700, distanceKm: 10, waterL: 3 },
    { day: "Sun", steps: 3000, calories: 250, distanceKm: 2, waterL: 1 },
  ];

  const result = weeklyActivity
    .map((days) => ({
      ...days,
      stepK: days.steps / 1000,
    }))
    .filter((days) => days.stepK >= 8 || days.waterL >= 2)
    .map((days) => ({
      day: days.day,
      stepK: days.stepK,
      distanceKm: days.distanceKm,
      hydrationScore: days.waterL * 2,
      fitnessScore: days.stepK * 2 + days.calories / 100,
    }))
    .reduce((total, n) => total + (n.hydrationScore + n.fitnessScore), 0);

  console.log(`Total weeklyActivity ${result}`);

  /*
  
  [
  {
    day: 'Mon',
    steps: 1200,
    calories: 220,
    distanceKm: 1,
    waterL: 1,
    stepK: 1.2
  },
  {
    day: 'Tue',
    steps: 8500,
    calories: 500,
    distanceKm: 6,
    waterL: 2,
    stepK: 8.5
  },
  {
    day: 'Wed',
    steps: 10000,
    calories: 550,
    distanceKm: 7,
    waterL: 2.5,
    stepK: 10
  },
  {
    day: 'Thu',
    steps: 7000,
    calories: 400,
    distanceKm: 5,
    waterL: 1.5,
    stepK: 7
  },
  {
    day: 'Fri',
    steps: 4000,
    calories: 300,
    distanceKm: 3,
    waterL: 1,
    stepK: 4
  },
  {
    day: 'Sat',
    steps: 15000,
    calories: 700,
    distanceKm: 10,
    waterL: 3,
    stepK: 15
  },
  {
    day: 'Sun',
    steps: 3000,
    calories: 250,
    distanceKm: 2,
    waterL: 1,
    stepK: 3
  }
]

[
  {
    day: 'Tue',
    steps: 8500,
    calories: 500,
    distanceKm: 6,
    waterL: 2,
    stepK: 8.5
  },
  {
    day: 'Wed',
    steps: 10000,
    calories: 550,
    distanceKm: 7,
    waterL: 2.5,
    stepK: 10
  },
  {
    day: 'Sat',
    steps: 15000,
    calories: 700,
    distanceKm: 10,
    waterL: 3,
    stepK: 15
  }
]

[
  {
    day: 'Tue',
    stepK: 8.5,
    distanceKm: 6,
    hydrationScore: 4,
    fitnessScore: 22
  },
  {
    day: 'Wed',
    stepK: 10,
    distanceKm: 7,
    hydrationScore: 5,
    fitnessScore: 25.5
  },
  {
    day: 'Sat',
    stepK: 15,
    distanceKm: 10,
    hydrationScore: 6,
    fitnessScore: 37
  }
]

Total weeklyActivity 99.5
   */
}
