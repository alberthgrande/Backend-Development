{
  const vehicles = ["mustang", "f-150", "expedition"];

  // old way
  const car = vehicles[0];
  const truck = vehicles[1];
  const suv = vehicles[2];

  console.log(truck);
}

{
  const vehicles = ["mustang", "f-150", "expedition"];

  const [car, truck, suv] = vehicles;

  console.log(truck);
}

{
  const vehicles = ["mustang", "f-150", "expedition"];

  const [car, , suv] = vehicles;
}

{
  function dateInfo(dat) {
    const d = dat.getDate();
    const m = dat.getMonth() + 1;
    const y = dat.getFullYear();

    return [d, m, y];
  }

  const [date, month, year] = dateInfo(new Date());
  console.log(`Date: ${date} - Month: ${month} - Year: ${year}`);
}

{
  const person = {
    firstName: "Alberth FirstName",
    lastName: "Alberth LastName",
    age: 27,
  };

  let { firstName, lastName, age } = person;

  console.log(`FirstName: ${firstName} - LastName: ${lastName} - Age: ${age}`);
}

{
  const person = {
    firstName: "Alberth",
    lastName: "Alberth",
    age: 50,
  };

  // Destructuring
  let { firstName, lastName, age, country = "Norway" } = person;
  console.log(country);
}

{
  const person = {
    firstName: "Alberth",
    lastName: "Alberth",
    age: 50,
    car: {
      brand: "Ford",
      model: "Mustang",
    },
  };

  // Destructuring
  let {
    firstName,
    car: { brand, model },
  } = person;

  // Access the variables:
  let message = `My name is ${firstName}, and I drive a ${brand} ${model}.`;

  console.log(message);
}
