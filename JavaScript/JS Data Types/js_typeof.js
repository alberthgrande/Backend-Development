{
  /*

    JavaScript has 7 primitive data types:

        string
        number
        boolean
        bigint
        symbol
        null
        undefined
     
    */
}

// Primitive Data Types
{
  console.log(typeof "alberth"); // Returns string
  console.log(typeof ("alberth" + "grande")); // Returns string
  console.log(typeof 3.14); // Returns number
  console.log(typeof 33); // Returns number
  console.log(typeof (33 + 66)); // Returns number
  console.log(typeof true); // Returns boolean
  console.log(typeof false); // Returns boolean
  console.log(typeof 1234n); // Returns bigint
  console.log(typeof Symbol()); // Returns symbol
  console.log(typeof x); // Returns undefined

  console.log(typeof null); // Returns object (this is a known bug in JavaScript)
}

// Complex Data Types
{
  console.log(typeof { name: "alberth", age: 30 }); // Returns object
  console.log(typeof [1, 2, 3]); // Returns object (arrays are objects in JavaScript)
  console.log(typeof new Map()); // Returns object
  console.log(typeof new Set()); // Returns object

  console.log(typeof function () {}); // Returns function
}

// How to Recognize an Array
{
  const fruits = ["apple", "banana", "cherry"];

  console.log(typeof fruits);
  console.log(Array.isArray(fruits)); // Returns true
}

// The instanceof Operator
{
  const time = new Date();
  console.log(time instanceof Date); // Returns true

  const arrayFruits = ["apple", "banana", "cherry"];
  console.log(arrayFruits instanceof Array); // Returns true

  const mapFruits = new Map([
    ["apple", 500],
    ["banana", 300],
    ["cherry", 200],
  ]);
  console.log(mapFruits instanceof Map); // Returns true

  const setFruits = new Set(["apple", "banana", "cherry"]);
  console.log(setFruits instanceof Set); // Returns true

  const func = function () {};
  console.log(func instanceof Function); // Returns true
}

// The constructor Property
{
  console.log("alberth".constructor); // Returns String
  console.log((27).constructor); // Returns Number
  console.log(true.constructor); // Returns Boolean
  console.log(1234n.constructor); // Returns BigInt
  console.log({}.constructor); // Returns Object
  console.log([].constructor); // Returns Array
  console.log(Symbol().constructor); // Returns Symbol
  console.log({ name: "alberth", age: 30 }.constructor); // Returns Object
  console.log([1, 2, 3].constructor); // Returns Array
  console.log(new Map().constructor); // Returns Map
  console.log(new Set().constructor); // Returns Set
  console.log(function () {}.constructor); // Returns Function
}
