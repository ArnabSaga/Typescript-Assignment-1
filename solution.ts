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

//? Problem - 4

interface Books {
  title: string;
  rating: number;
}

const filterByRating = (itemList: Books[]): Books[] => {
  return itemList.filter((item) => {
    return item.rating >= 4;
  });
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));