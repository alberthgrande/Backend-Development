// cannot be reassigned
{
  const PI = 3.14159;
  // PI = 3.14; // This will throw an error
  // PI = PI + 1; // This will also throw an error
}

// must be assigned when the variables is declared
{
  const PI = 3.14159;
  // PI = 3.14; // This will throw an error
}

// constant arrays
{
  const cars = ["Saab", "Volvo", "BMW"];
  console.log(cars); // Output: ["Saab", "Volvo", "BMW"]
  cars[0] = "Toyota"; // This is allowed
  console.log(cars);
  cars.push("Audi"); // This is also allowed
  console.log(cars);
  // cars = ["Honda", "Ford", "Chevrolet"]; // This will throw an error
}

// constant objects
{
  const cars = { type: "Fiat", model: "500", color: "white" };
  console.log(cars); // Output: { type: "Fiat", model: "500", color: "white" }
  cars.color = "red"; // This is allowed
  console.log(cars); // Output: { type: "Fiat", model: "500", color: "red" }
  // cars = { type: "Volvo", model: "XC90", color: "black" }; // This will throw an error
}
