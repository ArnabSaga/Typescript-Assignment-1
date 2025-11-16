//? Problem - 1

const formatValue = (input: string | number | boolean) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    return !input;
  } else {
    return undefined;
  }
};

//? Problem - 2
const getLength = (length: string | any[]): number => {
  if (typeof length === "string") {
    return length.length;
  } else if (Array.isArray(length)) {
    return length.length;
  } else {
    throw new Error(`Give me valid input for counting length`);
  }
};

//? Problem - 3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}';`; //! :) with bugs mar style
  }
}

const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());