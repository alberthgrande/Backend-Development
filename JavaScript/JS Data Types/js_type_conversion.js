{
  /*
    Converting Strings to Numbers
    Converting Numbers to Strings
    Converting Dates to Numbers
    Converting Numbers to Dates
    Converting Booleans to Numbers
    Converting Numbers to Booleans  
    */
}

// Converting Strings to Numbers
{
  const PI = "3.14";
  const PI_NUMBER = Number(Math.PI);

  console.log(Number(PI));
  console.log(Number(PI_NUMBER));
  console.log(Number("Hello"));
  console.log(Number("19 98"));
}

// The Unary + Operator
{
  let x = "100";
  let y = +x;
  console.log(x);
  console.log(y);
}

// Converting Numbers to Strings
{
  let PI = 3.14;
  console.log(String(PI));
  console.log(String(100 + 23));
  console.log(PI.toString());
  console.log((100 + 23).toString());
}

// Converting Dates to Numbers
{
  const date = new Date();
  console.log(Number(date));
  console.log(date.getTime());
}

// Converting Dates to Strings
{
  const date = new Date();
  console.log(String(date));
  console.log(date.getTime().toString());
  console.log(date.getDate().toString());
  console.log(date.getDay().toString());
}

// Converting Booleans to Numbers
{
  console.log(Number(true));
  console.log(Number(false));
}

// Converting Booleans to Strings
{
  console.log(String(true));
  console.log(String(false));
  console.log(true.toString());
  console.log(false.toString());
}

// Automatic Type Conversion
{
  console.log(5 + null);
  console.log("5" + null);
  console.log("5" + 2);
  console.log("5" - 2);
  console.log("5" * 2);
  console.log("5" / "2");
}
