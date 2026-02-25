// strings
{
  let carName1 = "Volvo XC60";
  let carName2 = "Volvo XC60";
  let carName3 = `Volvo XC60`;

  console.log(carName1);
  console.log(carName2);
  console.log(carName3);

  // Single quote inside double quotes:
  let answer1 = "It's alright";

  // Single quotes inside double quotes:
  let answer2 = "He is called 'Johnny'";

  // Double quotes inside single quotes:
  let answer3 = 'He is called "Johnny"';

  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
}

// numbers
{
  let x = 3.14; // A number with decimals
  let y = 3; // A number without decimals
  let z = -200; // A negative number

  console.log(x);
  console.log(y);
  console.log(z);
}

// exponential notation
{
  let x = 123e5; // 12300000
  let y = 123e-5; // 0.00123

  console.log(x);
  console.log(y);
}

// BigInt
{
  let x = 1234567890123456789012345n;
  let y = BigInt(1234567890123456789012345);

  console.log(x);
  console.log(y);
}

// Booleans
{
  let x = true;
  let y = false;

  console.log(x);
  console.log(y);

  let a = 5;
  let b = 10;
  let c = a > b; // false

  console.log(c);
}

// typeof operator
{
  let x = "Alberth";
  let y = 3.14;
  let z = true;
  console.log(typeof x); // string
  console.log(typeof y); // number
  console.log(typeof z); // boolean
}

// undefined
{
  let x;
  console.log(x); // undefined
  console.log(typeof x); // undefined
}

// empty values
{
  let x = "";
  console.log(x); // empty string
  console.log(typeof x); // string
}

// data types null
{
  let x = null;
  console.log(x); // null
  console.log(typeof x); // object (this is a known quirk in JavaScript)
}
