// ===============================
// TYPE CONVERSION
// 1. implicit conversion
// 2. explicit conversion
// ===============================

// Types of type conversions
// Type conversion in Javascript is of two types. They are implicit conversion and explicit conversion.

// Implicit type conversion - This means that the conversion happens automatically

// Explicit type conversion - This means that the conversion has to be done manually by the user.

// Implicit

let answer;
answer = 1 + 2;
console.log(answer);

let answer2;
answer2 = 1 + "Ninja";
console.log(answer2);
console.log(typeof answer2);

let number = "25";
console.log(number + 50);
console.log(typeof number);

// Explicit type conversion
// We have come across the point that explicit type conversion in javascript is those conversions that must be done manually.

let num = "777";
let ans;
// Type conversion from String to number
console.log(num);
console.log(typeof num);

// Using Number() function to do the conversion
ans = Number(num);
console.log(ans);
console.log(typeof ans);

// String conversion
// We do string conversion when we need the string form of a value. We use the String() function to convert a value to a string.

let input = false;
console.log("input = " + input);
console.log(typeof input);
input = String(input);
console.log("input = " + input);
console.log(typeof input);

// Numeric Conversion

// Numeric conversion can happen implicitly when we try to do mathematical operations on strings. We can also do numeric conversions explicitly.

let a = "9";
let b = "3";
console.log(a / b);

let c = "9";
console.log(c);
console.log(typeof c);
a = Number(c);
console.log(c);
console.log(typeof c);

let my_num = "123";
console.log(typeof parseInt(my_num));

console.log(Number("777"));
console.log(Number("404ninja"));
console.log(Number(true));
console.log(Number(false));

// Boolean Type Conversion
// Boolean type conversion is a relatively simple conversion. We can use the Boolean() function to convert to boolean data type.

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Ninja"));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));


