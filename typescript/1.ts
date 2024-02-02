class Person {
  name: String;
  constructor(name: String) {
    this.name = name;
  }

  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const person = new Person("Ana");
person.greet();

// Decorator - getting started

function loggedMethod(
  originalMethod: any,
  context: ClassMethodDecoratorContext
) {
  const methodName = String(context.name);

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`Log: Entering method "${methodName}"`);
    const result = originalMethod.call(this, ...args);
    console.log(`Log: Exiting method "${methodName}"`);
    return result;
  }

  return replacementMethod;
}
