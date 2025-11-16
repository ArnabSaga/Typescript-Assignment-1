/*
//Bug - gpt show me the overload version for problem-1. This only for myself improvement. 
function formatValue(input: string): string;
function formatValue(input: number): number;
function formatValue(input: boolean): boolean;

function formatValue(input: string | number | boolean) {
    if (typeof input === "string") return input.toUpperCase();
    if (typeof input === "number") return input * 10;
    if (typeof input === "boolean") return !input;
}

//Bug - gpt show me the overload version for problem-2. This only for myself improvement. 

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

//Bug - gpt show me the overload version for problem-3. This only for myself improvement. 

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
*/
