// Defining classes - Class expression

// Omit the class name to create an anonymous class.
const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
};

console.log(new Rectangle(5, 6).area()); // 30

// Named class expression
// The name is only visible within the scope of the class expression itself.
const Rectangle2 = class NamedRectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

const box = new Rectangle2(5, 6);
box.area(); // 30

console.log(Rectangle2.name); // "NamedRectangle"
// console.log(NamedRectangle.name); // ReferenceError: NamedRectangle is not defined

// --------------------------------------------

// Defining classes - Class Declaration

class Square {
    constructor(side) {
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

console.log(new Square(5, 6).area()); // 30

// --------------------------------------------

// Using getters in classes

class ClassWithGetSet {
    #msg = 'Hello';

    get msg() {
        return this.#msg;
    }

    set msg(val) {
        this.#msg = val;
    }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // 'Hello'

instance.msg = 'Hello World';
console.log(instance.msg); // 'Hello World'

// --------------------------------------------

// Static members in classes

class Triple {
    static customName = "Triple";
    static description = 'I triple any number you provide';
    static calculate(n = 1) {
        return n * 3;
    }
}

class SquaredTriple extends Triple {
    static longDescription;
    static description = "I square the triple of any number you provide";
    static calculate(n) {
        return super.calculate(n) * super.calculate(n);
    }
}

console.log(Triple.description); // I triple any number you provide
console.log(Triple.calculate(6)); // 18

const tp = new Triple();

console.log(SquaredTriple.description); // I square the triple of any number you provide
console.log(SquaredTriple.calculate(3)); // 81
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // Triple

// console.log(tp.calculate(3)); // TypeError: tp.calculate is not a function


// Calling static members from another static method

class StaticMethodCall {
    static staticProperty = 'static property';
    static staticMethod() {
        return `Static method - ${this.staticProperty}`;
    }
    static anotherStaticMethod() {
        return `Another static method - ${this.staticMethod()}`;
    }
}

console.log(StaticMethodCall.staticMethod()); // 'Static method - static property'
console.log(StaticMethodCall.anotherStaticMethod()); // 'Another static method - Static method - static property'

// Calling static members from a class constructor and other methods

class StaticMethodCalls {
    constructor() {
        console.log(StaticMethodCalls.staticProperty); // 'static property'
        console.log(this.constructor.staticProperty); // 'static property'
        console.log(StaticMethodCalls.staticMethod()); // 'static method has been called.'
        console.log(this.constructor.staticMethod()); // 'static method has been called.'
    }

    static staticProperty = 'static property';
    static staticMethod() {
        return 'static method has been called.';
    }
}

const staticCall = new StaticMethodCalls();

// --------------------------------------------

class Color {
    colorPublic = 'red';
    #colorPrivate = 'blue';

    static staticColor = 'brown';

    // Not supported yet!
    // static {
    //     console.log('static block');
    //     staticColorInBlock = 'black';
    // }

    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getPublicColor() {
        return this.colorPublic;
    }

    setPublicColor(color) {
        this.colorPublic = color;
    }

    getPrivateColor() {
        return this.#colorPrivate;
    }

    setPrivateColor(color) {
        this.#colorPrivate = color;
    }
}

const color = new Color('green');

console.log('color - ', color.color); // green
console.log('color getter - ', color.getColor()); // green
color.setColor('yellow');
console.log('color getter - ', color.getColor()); // yellow 

console.log('public color - ', color.colorPublic); // red
console.log('public color getter - ', color.getPublicColor()); // red
color.setPublicColor('black');
console.log('public color getter - ', color.getPublicColor()); // black

// Property '#colorPrivate' is not accessible outside class 'Color' because it has a private identifier.
// console.log('private color', color.#colorPrivate);

// In TypeScript this would have worked!
console.log('private color', color["#colorPrivate"]); // undefined

console.log('private color getter - ', color.getPrivateColor()); // blue
color.setPrivateColor('black');
console.log('private color getter - ', color.getPrivateColor()); // black

console.log(color.staticColor); // undefined
console.log(Color.staticColor); // brown
