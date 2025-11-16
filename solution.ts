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

