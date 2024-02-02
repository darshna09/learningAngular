// addInitializer - it is a way to hook into the beginning of the constructor
// or the initialization of the class itself if we're working with statics.

class Person {
  name: String;
  constructor(name: String) {
    this.name = name;
  }

  @bound
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// Decorator that uses addInitializer to call bind in the constructor for us.

function bound(originalMethod: any, context: ClassMethodDecoratorContext) {
  const methodName = context.name;
  if (context.private) {
    throw new Error(
      `'bound' cannot decorate private properties like ${methodName as string}.`
    );
  }

  context.addInitializer(function (this: any) {
    this[methodName] = this[methodName].bind(this);
  });
}

/**
 * If binding or arrow function is not used, `this` will be undefined.
 * See 2.ts for more details.
 * Here it is working because of the `bound` decorator.
 */

const ana = new Person("Ana").greet;
ana(); // Hello, my name is Ana!
