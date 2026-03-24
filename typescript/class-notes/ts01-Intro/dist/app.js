"use strict";
const greeting = 'Hello, World!';
console.log(greeting);
let age = 25;
const isStudent = true;
const username = 'lee';
console.log(`${username} is ${age} years old. Student: ${isStudent}`);
let city = 'Berlin';
let score = 100;
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
const strings = ['a', 'b', 'c'];
const mixed = [1, 'two', 3, 'four'];
const student = [1, 'Alice', true];
const classRoster = [
    [1, 'Elif'],
    [2, 'Duygu'],
    [3, 'Lee'],
];
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
;
console.log('Direction Up', 1);
console.log('Direction Down', 2);
console.log('Direction Left', 3);
console.log('Direction Right', 4);
