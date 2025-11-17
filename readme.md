# Question with the answer

## 1. What are some differences between interfaces and types in TypeScript?

Ans: TypeScript-এ Interface এবং Type দুটোই ডেটার গঠন বা স্ট্রাকচার নির্ধারণ করতে ব্যবহৃত হয়, তবে এদের মধ্যে কিছু পার্থক্য রয়েছে:

### Interface:

- একটি Object এর কাঠামো বা structure নির্ধারণ করতে ব্যবহৃত হয়।

- অন্য Interface দ্বারা extend করা যায় (অর্থাৎ বাড়ানো বা সম্প্রসারণ করা যায়)।

- সাধারণত objects এবং classes-এর structure ঠিক করতে ব্যবহৃত হয়।

```
interface Person {
    name: string;
    age: number;
}
```

### Type:

- আরও বেশি flexible—যেকোনো ধরনের মান (primitive, object, union, intersection ইত্যাদি) প্রকাশ করতে পারে।

- জটিল টাইপ বা বিভিন্ন টাইপের সমন্বয় (complex combinations) তৈরি করতে ব্যবহৃত হয়।

- একবার তৈরি হয়ে গেলে এটিকে আবার খুলে নতুন properties যোগ করা যায় না (interface-এর মতো reopen করা যায় না)।

```
type Person = {
    name: string;
    age: number;
}
```

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

Ans: Keyof ব্যবহার করা হয় কোনো object type-এর সব property নাম বের করে একটি টাইপ বানানোর জন্য।

Use case -

- keyof ব্যবহার করা হয় type-safe function তৈরি করতে।
- বানান ভুল এবং runtime errors এড়ানো।
- generic এবং dynamic object কাঠামোর সাথে কাজ করা।

```
type User = {
    id: number;
    name: string;
    isActive: boolean;
};

type UserKeys = keyof User;
```

## 3. Explain the difference between any, unknown, and never types in TypeScript.

Ans:

### Any:

- any মান TypeScript চেক করে না।
- যেকোনো কিছু assign করা যাই এবং যেকোনো অপারেশন ও করতে পাবো তা তে TypeScript কোনো error দেবে না।

Use case:

- যখন কোনো value মান​ একেবারে নিশ্চিত না কোনো value হবে বা type কি হবে।

```
let data: any;

data = 10;
data = "Arnab";
data = true;

data.toUpperCase();
```

### unknown

- unknown-এ যেকোনো কিছু রাখা যাই, কিন্তু ব্যবহার করার আগে type-check করতে হয়।

Use case:

- value গুলো dynamic হলে ও type safety দরকার হয়।

```
let value: unknown;

value = "hello"

if(typeof value === "string") {
    consol.log(value.toUpperCase());
}
```

### never

- never মানে এই কোড কখনোই কোনো মান return করবে না।
- এটি এমন function-এর টাইপ যেগুলো:

  - সর্বদা error throw করে।

  - অথবা infinite loop এ চলে।

Use case:

- never প্রধান তো Error handling, exhaustive checks, unreachable code কাজ করে।

```
function fail (msg: string): never {
    throw new Error(msg);
}
```

## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Ans: Enums TypeScript-এর একটি বিশেষ ফিচার যা একটি নির্দিষ্ট সেটের স্থির মান কে সহজ ও readable উপায়ে represent করতে ব্যবহৃত হয়।

Use case:

- নির্দিষ্ট value-গুলোর জন্য meaningful নাম দিতে।
- কোডকে clean, readable, এবং type-safe করতে।
- ভুল টাইপ লেখা বা spelling mistake-এর ঝুঁকি কমাতে।

### numeric enum

```
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

console.log(StatusCode.NotFound);
```

### string enum

```
enum UserRole {
  Admin = "ADMIN",
  Manager = "MANAGER",
  User = "USER"
}

let role: UserRole = UserRole.Manager;
console.log(role);

```

## 5. Provide an example of using union and intersection types in TypeScript.

Ans:

### Union type ( | ):

Union type মানে একটি variable একাধিক type যেকোনো একটি হতে পারে।

Example:

```
type Dog = {
    gaou: () => void;
}

type Cat = {
    meow: () => vodi;
}

function makeSound (animal: Dog | Cat) {
    if (gaou in animal) {
        animal.gaou();
    } else {
        animal.meow();
    }
}
```

### Intersection Type ( & )

Intersection type মানে দুটো type কে একত্র করে একটি টাইপ বানানো, এবং নতুন type এ দুটোর সব properties থাকতে হবে।

Example:

```
type Person = {
    name: string;
}

type Employee = {
    id = number
}

type PersonWhoIsAnEmployee = Person & Employee;

const employeeOne : PersonWhoIsAnEmployee = {
    name: "Arnab",
    id: 123,
}
```





# Ami bangla ektu kom lekhte pari, Tai extremely sorry bangla & English mix lekhar jono T_T. But I tried my best. 