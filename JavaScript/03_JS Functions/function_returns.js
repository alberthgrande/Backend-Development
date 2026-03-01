{
  function sayHello() {
    return "Hello World";
  }

  let message = sayHello();
  console.log(message);
}

// return the calculated value
{
  function multiply(a, c) {
    return a * c;
  }

  let result = multiply(5, 5);
  console.log(result);
}

// using return value in expression
{
  function multipy(a, c) {
    return a * c;
  }

  let result = multipy(5, 5) * 10;

  console.log(result);
}

// return values
{
  function fullName(firstName, lastName) {
    return firstName + " " + lastName;
  }

  let name = fullName("alberth", "grande");
  console.log(name);
}

// Return Statements Stop Execution
{
  function multiply(a, c) {
    return "Done";
    return a * c;
  }

  let result = multiply(5, 5);
  console.log(result);
}

// Functions Without return
{
  function multiply(a, c) {
    let result = a * c;
  }

  let result = multiply(5, 5);
  console.log(result);
}

// Returning Values Early
{
  function checkAge(age) {
    if (age < 18) return "Too young!";
    return "Access granted!";
  }

  let age = checkAge(17);
  console.log(age);
}
