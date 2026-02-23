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
    console.log(x);
  }

  myFunction();
}
// console.log(x); // This will cause an error because 'x' is not defined outside the function
