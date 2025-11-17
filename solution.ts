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

// ? Problem - 5

type UserInfo = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: UserInfo[]): UserInfo[] {
  return users.filter((user) => {
    return user.isActive === true;
  });
}

//? Problem - 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  return console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: false,
};

printBookDetails(myBook);

//? Problem - 7

const getUniqueValues = <T extends string | number>(arr1: T[], arr2: T[]) => {
  let result: T[] = [];

  //* for arr1 looping
  for (let i = 0; i < arr1.length; i++) {
    let currentValue = arr1[i];

    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === currentValue) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(currentValue);
    }
  }

  // * for arr2 looping
  for (let i = 0; i < arr2.length; i++) {
    let currentValue = arr2[i];

    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === currentValue) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(currentValue);
    }
  }

  return result;
};

//? Problem - 8

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    const bestPrice = product.price * product.quantity;

    const finalPrice = product.discount
      ? bestPrice * (1 - product.discount / 100)
      : bestPrice;

    return total + finalPrice;
  }, 0);
}
