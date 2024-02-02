// Multiple decorators

class Person {
  name: String;
  constructor(name: String) {
    this.name = name;
  }

  // These decorations run in "reverse order".
  // @bound decorates the result of @loggedMethod
  @bound
  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

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

const ana = new Person("Ana").greet;
ana();
