{
  const add = (a, c) => {
    return a + c;
  };

  console.log(add(5, 5));
}

{
  // Shorter Syntax Before Arrow
  const add = function (a, c) {
    return a + c;
  };

  console.log(add(5, 5));

  const hello = function () {
    return "Hello World!";
  };

  console.log(hello());
}

{
  // Shorter Syntax With Arrow
  const add = (a, c) => {
    return a + c;
  };

  console.log(add(5, 5));

  const hello = () => "Hello World!";

  console.log(hello());
}

{
  // Arrow Functions with One Parameter With Paranthesis
  const square = (x) => x * x;
  console.log(square(5));

  const hello = (val) => "Hello " + val;
  console.log(hello(5));
  console.log(hello("World!"));
}

{
  // Arrow Functions with One Parameter Without Paranthesis
  const square = (x) => x * x;
  console.log(square(5));

  const hello = (val) => "Hello " + val;
  console.log(hello(5));
  console.log(hello("World!"));
}

{
  // Arrow Functions Return Value by Default
  const hello = () => "Hello World!";
  console.log(hello());
}

{
  // Arrow Functions and the this Keyword
  // Arrow functions do not have their own this value.

  // They inherit this from the surrounding code.
  const person = {
    name: "Alberth",
    greet: function () {
      return this.name;
    },
  };
  console.log(person.greet());
}

{
  // Using an arrow function as a method often gives unexpected results.
  const person = {
    name: "Alberth",
    greet: () => {
      return this.name;
    },
  };

  console.log(person.greet);
}
