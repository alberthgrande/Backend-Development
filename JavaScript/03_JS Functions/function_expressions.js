{
  // Standard Function
  function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(7, 8));

  // Function Expression
  const multiplys = function (a, b) {
    return a * b;
  };
  console.log(multiplys(7, 8));
}

{
  const multiply = function (a, c) {
    return a * c;
  };

  console.log(multiply(7, 8));
}

{
  // Function Expressions Use Semicolons

  const add = function (a, c) {
    return a + c;
  };

  console.log(add(8, 7));
}

{
  // Functions Stored in Variables
  function run(fn) {
    return fn();
  }

  const sayHello = function () {
    return "Hello";
  };

  console.log(run(sayHello));
}
