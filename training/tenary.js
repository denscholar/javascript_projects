// JavaScript Ternary Operator
// Javascript ternary operators are three operand operators. The javascript ternary operator evaluates a condition. And then executes the code based on the condition. These three operands are separated by “?” and “:”. 

// The statement before “?” is known as the condition. It will get evaluated and gives an answer which can be followed. The statement after “?” or before “:” is the expression that will get executed when the condition is true. And the last statement after “:” is the expression that will be executed when the condition is false.

// Syntax
// condition ? expression_when_true : expression_when_false;

// Characteristics of Ternary Operator

//1. There are three operands in the expression: the condition, value if true, and value if false.
 
//2. The condition provided in the ternary operator is evaluated first. Also, the result of the evaluation should be either true/false or a boolean value.
 
//3. It allows you to write the conditional expression in a single space line.
 
//4. The ternary operators are used to increase the code readability and reduce the code length.

// Examples of JavaScript Ternary Operators

// ternary operator to check the eligibility to drive
let age = 16;
let result =
    (age >= 18) ? "You are eligible to drive." : "You are not eligible to drive yet";
console.log(result);

// Nested Ternary Operators 
// We can also use javascript ternary operators in a nested manner. Let’s have a look at the example:

// program to check if the number is zero, positive or negative
let z = 5;
let result2 = (z <= 0) ? (z == 0 ? "zero" : "negative") : "positive";
console.log(`This number is a ${result} number.`);