{
  hello = function () {
    console.log("Hello function");
  };
  hello();
}

{
  hello = () => {
    console.log("Hello arrow function");
  };
  hello();
}

{
  hello = () => console.log("Hello short arrow function");
  hello();
}

{
  hello = (val) => console.log(`Hello short parameter function ${val}`);
  hello("World");
}

{
  // with only one parameter

  hello = (val) => console.log(`Hello one parameter ${val}`);
  hello("one");
}

{
  class Header {
    constructor() {
      this.color = "Red";
    }

    changeColor = function () {
      return this.color;
    };
  }

  const myHeader = new Header();

  console.log(myHeader.changeColor());
}

{
  class Header {
    constructor() {
      this.color = "Red";
    }

    changeColor = () => {
      return this.color;
    };
  }

  const myHeader = new Header();

  console.log(myHeader.changeColor());
}
