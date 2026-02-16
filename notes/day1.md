// =======================================
// JS Practice Notes — Day 1: Loops & Functions
// =======================================

// --- 1. Swap two numbers ---
// Using a temporary variable
let a = 5;
let b = 6;
let temp = a;
a = b;
b = temp;
console.log("Swap using temp:", a, b);

// Swap without a temporary variable
a = 5;
b = 6;
a = a + b;
b = a - b;
a = a - b;
console.log("Swap without temp:", a, b);

// --- 2. String slicing ---
let str = 'javascript';

// Slice first 4 characters
console.log("Slice 0-4:", str.slice(0, 4));

// Slice remaining characters
console.log("Slice 4-end:", str.slice(4));

// --- 3. Palindrome checks ---

// Function using for loop
let isPalindrome = 'racecar';
function Palindrome(word) {
    word = String(word);
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log("Palindrome check (for loop):", Palindrome(isPalindrome));

// Function using split, reverse, join
let subu = 'racecar';
let hello = 'whatever';
function palin(str) {
    str = String(str);
    return str === str.split('').reverse().join('');
}
console.log("Palindrome check (reverse method):", palin(subu));
console.log("Palindrome check (reverse method):", palin(hello));

// --- 4. Sum of digits using while loop ---
function sumOfDigits(num) {
    num = Number(num);
    let sum = 0;

    while (num != 0) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }

    return sum;
}
console.log("Sum of digits:", sumOfDigits(2354435)); // Output: 26

// --- 5. Reverse a number ---
function reverseNumber(num) {
    num = Number(num);
    let reversed = 0;

    while (num !== 0) {
        let last = num % 10;
        reversed = reversed * 10 + last;
        num = Math.trunc(num / 10);
    }

    return reversed;
}
console.log("Reversed number:", reverseNumber(12345)); // Output: 54321

// --- 6. Factorial ---
// Using while loop or for loop
function factorial(num) {
    num = Number(num);
    let fac = 1;

    // Using while loop
    let n = num;
    while (n > 1) {
        fac *= n;
        n--;
    }

    return fac;
}
console.log("Factorial of 5:", factorial(5)); // Output: 120

// --- 7. Prime number check ---
function isPrime(num) {
    num = Number(num);
    if (num <= 1) return false; // 0 and 1 are not prime
    if (num === 2) return true; // 2 is prime

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) return false;
    }

    return true;
}
console.log("Is 7 prime?", isPrime(7)); // Output: true
console.log("Is 9 prime?", isPrime(9)); // Output: false
console.log("Is 13 prime?", isPrime(13)); // Output: true
// =======================================
// JS Practice Notes — Day 1: Loops & Functions
// =======================================

// --- 1. Swap two numbers ---
// Using a temporary variable
let a = 5;
let b = 6;
let temp = a;
a = b;
b = temp;
console.log("Swap using temp:", a, b);

// Swap without a temporary variable
a = 5;
b = 6;
a = a + b;
b = a - b;
a = a - b;
console.log("Swap without temp:", a, b);

// --- 2. String slicing ---
let str = 'javascript';

// Slice first 4 characters
console.log("Slice 0-4:", str.slice(0, 4));

// Slice remaining characters
console.log("Slice 4-end:", str.slice(4));

// --- 3. Palindrome checks ---

// Function using for loop
let isPalindrome = 'racecar';
function Palindrome(word) {
    word = String(word);
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log("Palindrome check (for loop):", Palindrome(isPalindrome));

// Function using split, reverse, join
let subu = 'racecar';
let hello = 'whatever';
function palin(str) {
    str = String(str);
    return str === str.split('').reverse().join('');
}
console.log("Palindrome check (reverse method):", palin(subu));
console.log("Palindrome check (reverse method):", palin(hello));

// --- 4. Sum of digits using while loop ---
function sumOfDigits(num) {
    num = Number(num);
    let sum = 0;

    while (num != 0) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }

    return sum;
}
console.log("Sum of digits:", sumOfDigits(2354435)); // Output: 26

// --- 5. Reverse a number ---
function reverseNumber(num) {
    num = Number(num);
    let reversed = 0;

    while (num !== 0) {
        let last = num % 10;
        reversed = reversed * 10 + last;
        num = Math.trunc(num / 10);
    }

    return reversed;
}
console.log("Reversed number:", reverseNumber(12345)); // Output: 54321

// --- 6. Factorial ---
// Using while loop or for loop
function factorial(num) {
    num = Number(num);
    let fac = 1;

    // Using while loop
    let n = num;
    while (n > 1) {
        fac *= n;
        n--;
    }

    return fac;
}
console.log("Factorial of 5:", factorial(5)); // Output: 120

// --- 7. Prime number check ---
function isPrime(num) {
    num = Number(num);
    if (num <= 1) return false; // 0 and 1 are not prime
    if (num === 2) return true; // 2 is prime

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) return false;
    }

    return true;
}
console.log("Is 7 prime?", isPrime(7)); // Output: true
console.log("Is 9 prime?", isPrime(9)); // Output: false
console.log("Is 13 prime?", isPrime(13)); // Output: true
