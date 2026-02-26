/*{
  // String
  let color = "Yellow";
  let lastName = "Johnson";

  // Number
  let length = 16;
  let weight = 7.5;

  // BigInt
  let x = 1234567890123456789012345n;
  let y = BigInt(1234567890123456789012345);

  // Boolean
  let x = true;
  let y = false;

  // Object
  const person = { firstName: "John", lastName: "Doe" };

  // Array object
  const cars = ["Saab", "Volvo", "BMW"];

  // Date object
  const date = new Date("2022-03-25");

  // Undefined
  let x;
  let y;

  // Null
  let x = null;
  let y = null;

  // Symbol
  const x = Symbol();
  const y = Symbol();
}
*/

// the typeof operator
{
  const x = "Hello";
  console.log(typeof x); // Output: "string"
  const y = 123;
  console.log(typeof y); // Output: "number"
}

// javascript strings
{
  const str1 = "Hello";
  const str2 = "World";
  const str3 = str1 + " " + str2;
  console.log(str3); // Output: "Hello World"
}

// javascript numbers
{
  const x1 = 3.14; // A number with decimals
  const x2 = 3; // A number without decimals

  console.log(x1); // Output: 3.14
  console.log(x2); // Output: 3
}

// exponential notation
{
  const x1 = 123e5; // 12300000
  const x2 = 123e-5; // 0.00123

  console.log(x1); // Output: 12300000
  console.log(x2); // Output: 0.00123
}

// javascript boleans
{
  const x1 = 5 > 3; // true
  const x2 = 5 < 3; // false

  console.log(x1); // Output: true
  console.log(x2); // Output: false
}
