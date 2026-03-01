{
  function multiply(a, c) {
    return a * c;
  }

  let result = multiply(4, 5);

  console.log(result);
}

// The Arguments Object
{
  let x = findMax(1, 123, 500, 115, 44, 88);

  function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }

    return max;
  }

  console.log(x);
}

{
  let x = sumAll(1, 123, 500, 115, 44, 88);

  function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  }

  console.log(x);
}

// The Order of Arguments Matters
{
  function subtract(a, c) {
    return a - c;
  }

  let x1 = subtract(10, 5);
  let x2 = subtract(5, 10);

  console.log(x1);
  console.log(x2);
}

// Arguments Can Be Variables
{
  let a = 5;
  let c = 6;

  function multiply(a, c) {
    return a * c;
  }

  console.log(multiply(a, c));
}

// Incorrect Arguments
{
  function toCelsius(fahrenheit) {
    return (5 / 9) * fahrenheit - 32;
  }

  let value = toCelsius("Alberth");

  console.log(value);
}

// Missing Arguments
{
  function multiply(a, c) {
    return a * c;
  }

  console.log(multiply(4));
}

// Default Parameters
{
  function myFunction(x, y) {
    if (y === undefined) {
      y = 2;
    }

    return x * y;
  }

  console.log(myFunction(4, 5));
}

// Default Parameter Values
{
  function myFunction(x, y = 10) {
    return x + y;
  }

  console.log(myFunction(5));
}

// Function Rest Parameter
{
  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }

  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(x);
}

{
  function changeValue(num) {
    console.log("Inside function before change:", num);
    num = 100; // Change the value
    console.log("Inside function after change:", num);
  }

  let originalNumber = 50;

  console.log("Before function call:", originalNumber);

  changeValue(originalNumber);

  console.log("After function call:", originalNumber);
}

{
  function changeName(name) {
    name = "Maria";
  }

  let myName = "Alberth";

  console.log("Before:", myName);

  changeName(myName);

  console.log("After:", myName);
}

{
  function changeAge(person) {
    person.age = 30;
  }

  let user = { name: "John", age: 20 };

  console.log("Before:", user);

  changeAge(user);

  console.log("After:", user);
}
