class Car {
  constructor(name) {
    this.brand = name;
  }

  // Method in class
  present() {
    return `I have a ` + this.brand;
  }
}

const myCar = new Car("Ford");
console.log(myCar.brand);
console.log(myCar.present());

// Class Inheritance
class Model extends Car {
  constructor(name, mod) {
    super(name); // call the parent constructor
    this.model = mod;
  }

  show() {
    return this.present() + `, it is a ` + this.model;
  }
}

const myModel = new Model("Ford", "Mustang");
console.log(myModel.show());
