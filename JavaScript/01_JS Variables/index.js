// let variables
{
  let x = 5;
  let y = 10;

  let sum = x + y;

  console.log("The sum of x and y is: " + sum);
}

// const variables
{
  const x = 5;
  const y = 10;

  const sum = x + y;

  console.log("The sum of x and y is: " + sum);
}

// Declaring a variable using let
{
  let carName = "Volvo";

  console.log("The car name is: " + carName);
}

// Declaring a variable using const
{
  const carName = "Volvo";

  const price1 = 20000;
  const price2 = 30000;

  let totalPrice = price1 + price2;

  console.log("The car name is: " + carName);
  console.log("The total price of the cars is: " + totalPrice);
}

// JavaScript Data Types
{
  const age = 27;
  let personName = "Alberth";
  let answer = "Yes I am!";

  console.log("Age: " + age);
  console.log("Person Name: " + personName);
  console.log("Answer: " + answer);
}

// block scope
{
  let x = 5;
  if (x > 3) {
    let y = 10;
    console.log("Inside block: x = " + x + ", y = " + y);
  }
}

// function scope
{
  function myFunction() {
    let x = 5;
    console.log("Inside function: x = " + x);
  }
  myFunction();
}
// console.log("Outside function: x is not defined" + x);

// global scope
{
  var globalVar = "I am a global variable";

  function myFunction() {
    console.log("Inside global scope: " + globalVar); // Accessing global variable inside a function
  }

  myFunction(); // Output: I am a global variable
}
console.log("Outside global scope: " + globalVar); // Accessing global variable outside the function
