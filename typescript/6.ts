// Well typed loggedMethod decorator

function loggedMethod<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  const methodName = String(context.name);

  function replacementMethod(this: This, ...args: Args): Return {
    console.log(`LOG: entering method ${methodName}`);
    const result = target.call(this, ...args);
    console.log(`LOG: exiting method ${methodName}`);
    return result;
  }

  return replacementMethod;
}

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

const ana = new Person("Ana");
ana.greet();

// LOG: entering method greet
// Hello, my name is Ana!
// LOG: exiting method greet
