let age = 25;
let isAdult = age >= 18;  // true if age is 18 or more
console.log(isAdult); // Expected output: true

let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y; // Remainder of 10 divided by 5

console.log("Addition:", addition);          // Output: 15
console.log("Multiplication:", multiplication); // Output: 50
console.log("Modulus:", modulus);           // Output: 0

let n = 7; // Change this value to test with different numbers
let isEven = (n % 2 === 0) ? "Even" : "Odd";

console.log(`The number ${n} is ${isEven}`); // Expected output: Odd

let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

console.log(numbers); // Output: [1, 2, 3, 4, 5]

function square(num) {
    return num * num;
}

console.log(square(4)); // Expected output: 16
console.log(square(10)); // Expected output: 100
