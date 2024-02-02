// `this` in JS classes

class Person {
  name: String;
  constructor(name: String) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// `this` is bound to the person object
const person = new Person("Ana");
person.greet();

// ERROR: `this` is undefined
// const anand = new Person("Anand").greet;
// anand();

class PersonWithBinding {
  name: String;
  constructor(name: String) {
    this.name = name;
    this.greet = this.greet.bind(this);
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const adam = new PersonWithBinding("Adam");
adam.greet();

const anand = new PersonWithBinding("Anand").greet;
anand();

// OR
class PersonWithArrowFunction {
  name: String;
  constructor(name: String) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hello, my name is ${this.name}!`);
  };
}

const eve = new PersonWithArrowFunction("Eve");
eve.greet();

const anandi = new PersonWithBinding("Anandi").greet;
anandi();
