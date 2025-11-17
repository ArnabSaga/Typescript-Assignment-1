/*
//Bug - gpt show me some solve for problem-1. This only for myself improvement. 
function formatValue(input: string): string;
function formatValue(input: number): number;
function formatValue(input: boolean): boolean;

function formatValue(input: string | number | boolean) {
    if (typeof input === "string") return input.toUpperCase();
    if (typeof input === "number") return input * 10;
    if (typeof input === "boolean") return !input;
}

//Bug - gpt show me some solve for problem-2. This only for myself improvement. 

//! method - 1 
function getLength(value: string): number;
function getLength(value: any[]): number;

function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    }
    
    if (Array.isArray(value)) {
        return value.length;
    }
    
    throw new Error("Invalid input");
}


//! method - 2

const getLength = <T extends string | any[]>(value: T): number => {
  return value.length;
};

//Bug - gpt show me some solve for problem-3. This only for myself improvement. 

class IPerson {
    name: string;
    age: number;
    getDetails(): string;
}

class Persons implements IPerson {
    constructor(public name: string, public age: number) {}
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

//Bug - gpt show me some solve for problem-4. This only for myself improvement. 

//! method - 1 
const filterByRating = (items: Books[]): Books[] => {
  return items.reduce((acc, item) => {
    if (item.rating >= 4) acc.push(item);
    return acc;
  }, [] as Books[]);
};

//! method - 2
interface HasRating {
  rating: number;
}

const filterByRating = <T extends HasRating>(items: T[]): T[] =>
  items.filter(item => item.rating >= 4);

//Bug - gpt show me some solve for problem-5. This only for myself improvement. 

//! method - 1 => Enterprise-Level Version 
function filterBy<T extends object, K extends keyof T>(
  items: ReadonlyArray<T>,
  key: K,
  value: T[K]
): T[] {
  return items.filter(item => item[key] === value);
}

const activeUsers = filterBy(users, "isActive", true);

//! method - 2 => Programming Style
const filterActiveUsers = (users: readonly UserInfo[]) =>
  users.filter(({ isActive }) => isActive);

//Bug - gpt show me some solve for problem-6. This only for myself improvement. 

//! method - 1 => Class-Based Version
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

class BookPrinter {
  constructor(private book: Book) {}

  printDetails(): void {
    console.log(
      `Title: ${this.book.title}, Author: ${this.book.author}, Published: ${this.book.publishedYear}, Available: ${this.book.isAvailable ? "Yes" : "No"}`
    );
  }
}

//Bug - gpt show me some solve for problem-7. This only for myself improvement. 

//! Method - 1 => set
const getUniqueValues = <T extends string | number>(arr1: T[], arr2: T[]): T[] => {
  return [...new Set([...arr1, ...arr2])];
};

//! Method - 2 => reduce
const getUniqueValues = <T extends string | number>(arr1: T[], arr2: T[]): T[] => {
  return [...arr1, ...arr2].reduce<T[]>((acc, value) => {
    if (!acc.includes(value)) acc.push(value);
    return acc;
  }, []);
};


//Bug - gpt show me some solve for problem-8. This only for myself improvement. 

//! Method - 1 => Using a helper function for discount
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateProductPrice = (p: Product): number => {
  const base = p.price * p.quantity;
  return p.discount ? base * (1 - p.discount / 100) : base;
};

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, p) => total + calculateProductPrice(p), 0);
}

//! Method - 2 => Using a map
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  const prices = products.map((p) => {
    const base = p.price * p.quantity;
    const final = p.discount ? base * (1 - p.discount / 100) : base;
    return final;
  });

  return prices.reduce((sum, price) => sum + price, 0);
}


*/
