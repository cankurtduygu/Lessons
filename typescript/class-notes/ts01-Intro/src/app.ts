// console.log('selam arkadaslar..') // this is a comment line

// const a = (a,b) => a + b

// =============================================
// TypeScript Introduction - Session 01
// =============================================

// * ---- 1. Basic Types ----
// Ts add static types to JS.
const greeting: string = "Hello CH11";
console.log(greeting);

let age: number = 25;
const isStudent: boolean = true;
const username: string = "lee";

//! age = '25'
console.log(`${username} is ${age} years old. Student: ${isStudent}`);

// * ---- 2. Type Inference ----
// TS can infer types automatically.

let city = "Berlin";
let score = 100;

//! city = 42

// * ---- 3. Array ----
// Two ways to define typed arrays:

const numbers: number[] = [1, 2, 3, 4];
numbers.push(40);

//! numbers.push('Hello there')

const fruits: Array<string> = ["apple", "banana"];
fruits.push("cherry");

//! fruits.push(15)

// * ---- 4. Tuples ----
// Fixed-length arrays where each position has a specific type.
const student: [number, string, boolean] = [1, "Lee", true];

const classRoster: [number, string][] = [
  [1, "Elif"],
  [2, "Duygu"],
  [3, "Lee"],
];

//! classRoster.push(['4', 'Ayla'])

// classRoster[0]?.[0]

// * ---- 5. Enums ----
// Enum give friendly names to sets of values

// Numeric enum - values auto-increment from the first value.
enum Direction {
  // if you dont assign a value, default starts at 0
  Up = 1,
  Down, // 2
  Left, // 3
  Right, // 4
}

console.log("Direction Up", Direction.Up);
console.log("Direction Down", Direction.Down);
console.log("Direction Left", Direction.Left);
console.log("Direction Right", Direction.Right);

// String enum - each member must have a string value

const enum StatusCode {
  NotFound = "404",
  PermissionDenied = "403",
  Success = "200",
  BadRequest = "400",
}
//  Your tsconfig has isolatedModules: true, which means const enum works fine within the same file, but if you export a const enum and import it in another file, TypeScript will emit it as a regular object instead of inlining.

console.log("Success Code: ", StatusCode.Success);
console.log("Bad Request Code: ", StatusCode.BadRequest);

// * ---- 6. Union Types ----
// A variable can hold more than one type using the pipe (|) operator

let id: number | string = 101;
id = "ABC-102";

//! id = true

// * ---- 7. Type Aliases ----
// Create reusable custom type names for complex or reapated types.

type ID = number | string;

let orderId: ID = 5001;
let purchaseId: ID = "PRC-1001";
let salesId: ID;

console.log("Order id: ", orderId, "Purchase id: ", purchaseId);

// * ---- 8. String Literal Types ----
// Restrict a variable to sepecific string values only.

type Color = "yellow" | "navy blue";

let team: Color = "yellow";

team = "navy blue";

//! team = 'red'

// * ---- 9. Objects & Readonly ----
// Define object shapes with type annotations.
// 'readonly' prevents a property from being changed after creation.

type UserRole = "admin" | "member" | "mentor" | "supervisor";
type User = {
  readonly id: string;
  name: string;
  email: string;
  dob: Date;
  isVerified: boolean;
  readonly role: UserRole;
  age: number;
};

const user: User = {
  id: "1234",
  name: "Lee",
  email: "lee@gmail.com",
  isVerified: true,
  role: "member",
  age: 25,
  dob: new Date(),
};

user.age = 40;
//! user.id = "0987";
//! user.role = "admin";

let users: User[] = [];
users.push(user);

const user1 = {
  id: 1234,
  name: "Lee1",
  email: "lee1@gmail.com",
  isVerified: true,
  role: "mentor",
  age: 20,
  dob: new Date(),
};

//! users.push(user1);

// * ---- 10. Intersection Types ----
// Combine multiple types into one using '&'.

type Book = {
  title: string;
  pages: number;
};

type Author = {
  authorName: string;
};

type BookWithAuthor = Book & Author;

const myBooks: BookWithAuthor[] = [
    {
        title: 'Lord of the Rings',
        pages: 1178,
        authorName: 'J.R.R Tolkien'
    },
    {
        title: 'Karamozov Kardesler',
        pages: 1100,
        authorName: 'Dosdoyeski'
    }
];

console.log(myBooks);
