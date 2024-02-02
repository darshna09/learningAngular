// Fields and methods

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

const point = new Point(1, 2);
console.log(`x = ${point.x}, y = ${point.y}`); // 1

class Point3D extends Point {
  constructor(x: number, y: number, public z: number) {
    super(x, y);
    this.z = z;
  }
}

// Get and Set

class Thing {
  size = 0;

  get getSize(): number {
    return this.size;
  }

  set setSize(value: string | number | boolean) {
    let num = Number(value);
    // Don't allow NaN, Infinity, etc

    if (!Number.isFinite(num)) {
      this.size = 0;
      return;
    }

    this.size = num;
  }
}

const thisThing = new Thing();
thisThing.setSize = 10;
console.log(`size = ${thisThing.getSize}`); // 10

// Class Heritage - `implements` clause

interface Pingable {
  ping(): void;
  sound?: number;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping! from Sonar");
  }
}

class Ball implements Pingable {
  // Below error will come if ping method is removed.
  // Class 'Ball' incorrectly implements interface 'Pingable'.
  // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.ts(2420)
  ping() {
    console.log("ping! from ball");
  }

  pong() {
    console.log("pong!");
  }
}

const boat = new Sonar();
// Property 'sound' does not exist on type 'Sonar'.ts(2339)
// boat.sound = 10;
boat.ping();

// Class Heritage - `extends` clause

class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const tom = new Dog();
tom.move();
tom.woof(1);

// Overriding methods

class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  // Important to follow base class contract, optional name parameter
  greet(name?: string) {
    if (name) {
      console.log(`Hello, ${name.toUpperCase()}`);
    } else {
      super.greet();
    }
  }
}

const d = new Derived();
d.greet(); // Hello, world!
d.greet("reader"); // Hello, READER

// Private & Protected members

class Narrow {
  protected x: number = 1;
  private y: number = 2;

  print() {
    console.log(`road = ${this.x}`);
  }
}

class Wide extends Narrow {
  protected x: number = 5;
}

class Wider extends Narrow {
  f1(other: Wide) {
    // Property 'x' is protected and only accessible within class 'Wide' and its subclasses.ts(2445)
    // other.x = 10; // ERROR
  }

  f2(other: Narrow) {
    // Property 'y' is private and only accessible within class 'Narrow'.
    // other.y = 10; // ERROR
  }

  f3(other: Wider) {
    other.x = 10;
  }
}

const road = new Wider();
const street = new Wide();
const avenue = new Narrow();

road.f3(road);
road.print();

road.f1(street);
road.print();

road.f2(avenue);
road.print();

// Property 'y' is private and only accessible within class 'Narrow'.ts(2341)
// console.log(avenue.y);
// But the following is not an error !!!!!! - SOFT PRIVATE
console.log("accessing private = ", avenue["y"]);

// Generic Class

class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const bag = new Box("Sunglasses");
console.log(`bag contents = ${bag.contents}`);
