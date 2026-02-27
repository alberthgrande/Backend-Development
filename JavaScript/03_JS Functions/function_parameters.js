{
  function multiply(a, c) {
    return a * c;
  }

  let result = multiply(5, 5);
  console.log(result);
}

// function one parameter
{
  function sayHello(name) {
    return "Hello " + name;
  }

  let greeting = sayHello("Alberth");
  console.log(greeting);

  function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }

  let fahrenheit = toCelsius(77);
  console.log(fahrenheit);
}

// function multiple parameters
{
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  let name = fullName("Alberth", "Grande");
  console.log(name);
}

// default parameter value
{
  function myFuncion(x, y = 5) {
    return x + y;
  }

  console.log(myFuncion(5));
}
