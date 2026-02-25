// JavaScript Array toString()
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.toString());
}

// JavaScript Date toString()
{
  const date = new Date();
  console.log(date.toString());
}

// JavaScript Number toString()
{
  let num = 123;
  console.log(num.toString());
}

// JavaScript Function toString()
{
  // When used on a function, toString() returns the source code of the function as a string.
  const a = function (a, c) {
    return a + c;
  };
  console.log(a.toString());
}

// JavaScript Object toString()
{
  let person = {
    firstName: "Alberth",
    lastName: "Grande",
  };

  console.log(person.toString());
}
