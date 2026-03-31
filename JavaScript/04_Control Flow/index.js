{
  if (new Date().getHours() < 18) {
    console.log("Good day!");
  } else {
    console.log("Good evening");
  }
}

{
  let age = 16;
  let country = "PHILIPPINES";
  let text = "You can not drive!";

  if (country === "PHILIPPINES") {
    if (age <= 16) {
      text = "You can drive!";
    } else {
      text;
    }
  }

  console.log(text);
}

{
  const time = new Date().getHours();
  let greeting;

  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day!";
  } else {
    greeting = "Good evening";
  }

  console.log(greeting);
}

{
  let text;
  if (Math.random() < 0.5) {
    text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
  } else {
    text = "<a href='https://wwf.org'>Visit WWF</a>";
  }
  console.log(text);
}

{
  let age = 20;
  let text = age > 18 ? "Adult" : "Minor";
  console.log(text);

  let price = 10;
  let isMember = false;
  let discount = isMember ? 0.2 : 0;
  let total = price - price * discount;

  console.log(total);
  //   console.log(discount);
}
