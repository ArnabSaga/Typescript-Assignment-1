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

/*
//* gpt show me the overload version for problem-1. This only for myself improvement. 
function formatValue(input: string): string;
function formatValue(input: number): number;
function formatValue(input: boolean): boolean;

function formatValue(input: string | number | boolean) {
    if (typeof input === "string") return input.toUpperCase();
    if (typeof input === "number") return input * 10;
    if (typeof input === "boolean") return !input;
}
*/

//? Problem - 2

