{
  const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

  let text = "";

  for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "\n";
  }
  console.log(text);
}

{
  let text = "";
  let i = 0;

  while (i < 10) {
    text += "The while number is " + i + "\n";

    i++;
  }

  console.log(text);
}

{
  let text = "";
  let i = 0;

  do {
    text += "The do while number is " + i + "\n";

    i++;
  } while (i < 10);

  console.log(text);
}

{
  const cars = ["BMW", "Volvo", "Saab", "Ford"];

  let i = 0;
  let text = "";

  for (; cars[i]; ) {
    text += cars[i] + "\n";
    i++;
  }
  console.log(text);

  while (cars[i]) {
    text += cars[i] + "\n";
    i++;
  }
  console.log(text);
}

{
  let i = 0;
  let text = "";

  while (i < 10) {
    if (i === 3) {
      break;
    }
    text += `the number stop ${i}\n`;
    i++;
  }
  console.log(text);
}
