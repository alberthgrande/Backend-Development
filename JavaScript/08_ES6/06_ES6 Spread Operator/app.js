{
  const numberOne = [1, 2, 3];
  const numberTwo = [4, 5, 6];
  const numbersCombined = [...numberOne, ...numberTwo];
  console.log(numbersCombined);
}

{
  const numberOne = [1, 2, 3];
  const numberTwo = [4, 5, 6];
  const numbersCombined = [...numberOne, ...numberTwo];

  const [one, two, ...rest] = numbersCombined;
  console.log(one);
  console.log(two);
  console.log(rest);
}


{
    const car = {
        brand: "Ford",
        model: "Mustang",
        color: "red"
    }

    const car_more = {
        type: "car",
        year: 2021,
        color: "yellow",
    }

    const myCar = {...car, ...car_more};

    console.log(myCar)
}