{
  let x = 10;
  //   let x = 20; // This will cause an error because 'x' has already been declared with 'let'
  console.log(x);
}

// funcation scope
{
  function myFunction() {
    let x = 10;
    let y = 20;
    let z = x + y;
    console.log("function scope: " + x);
  }

  myFunction();
}
// console.log(x); // This will cause an error because 'x' is not defined outside the function

//global scope
{
  var x = 5;
}
console.log("global scope: " + x); // This will work because 'var' is function-scoped and can be accessed outside the block

// cannot be replaced
{
  /* variables declared with 'let' cannot be redeclared in the same scope */

  let x = "Alberth";
  // let x = 5; // This will cause an error because 'x' has already been declared with 'let'

  /* variables declared with 'const' cannot be redeclared or reassigned in the same scope */
  const y = "Hello";
  // const y = "World"; // This will cause an error because 'y' has already been declared with 'const'
  // y = "Hi"; // This will also cause an error because 'y' is a constant and cannot be reassigned

  /* variables declared with 'var' can be redeclared and reassigned in the same scope */
  var z = "JavaScript";
  var z = "Programming"; // This will work because 'var' can be redeclared
  z = "Language"; // This will also work because 'var' can be reassigned
}

// redeclaring variables with

var x = 10;

{
  var x = 20; // This will not cause an error because 'var' is function-scoped and can be redeclared
  console.log("Inside block: " + x); // Output: 20
}
console.log("Outside block: " + x); // Output: 20 (the value of 'x' has been changed to 20)

// redeclaring variables with let and const
let y = 10;
{
  let y = 20; // This will not cause an error because 'let' is block-scoped and can be redeclared in a different block
  console.log("Inside block: " + y); // Output: 20
}
console.log("Outside block: " + y); // Output: 10 (the value of 'y' outside the block remains unchanged)

// let hoisting
{
  /*
    Variables defined with var are hoisted to the top and can be initialized at any time.
    Meaning: You can use the variable before it is declared: 
  */

  carName = "Volvo";
  console.log(carName); // Output: "Volvo"
  var carName;
}
