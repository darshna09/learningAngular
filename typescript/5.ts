// Customizing decorators

class Person {
  name: String;
  constructor(name: String) {
    this.name = name;
  }

  @loggedMethod("registro")
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// Sending decorator from a function

function loggedMethod(headMessage = "LOG") {
  return function actualDecorator(
    originalMethod: any,
    context: ClassMethodDecoratorContext
  ) {
    const methodName = String(context.name);

    function replacementMethod(this: any, ...args: any[]) {
      console.log(`${headMessage}: Entering method "${methodName}"`);
      const result = originalMethod.call(this, ...args);
      console.log(`${headMessage}: Exiting method "${methodName}"`);
      return result;
    }

    return replacementMethod;
  };
}

const ana = new Person("Ana");
ana.greet();

// registro: Entering method "greet"
// Hello, my name is Ana!
// registro: Exiting method "greet"
