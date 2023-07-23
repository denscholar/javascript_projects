/* 
A block of code that can be reused over and over again.

*/

// syntax
function logger(x, y) {
  //   console.log(`my name is ${x} and I am ${y} years old`);
  const solution = x + y;
  return solution;
}

// const result = logger(24, 50);
// console.log(result);
// console.log(logger(24, 50));

// ########################################

// function declarations VS expressions

// ########################################

// function declarations
function calAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calAge1(1982);

// function expressions
const calAge2 = function (birthDate) {
  return 2037 - birthDate;
};

const age2 = calAge2(1986);
// console.log(age1, age2);

// Arrow functions => this was added in ES6

const calAge3 = (birthYear) => 2037 - birthYear;
const age3 = calAge3(1986);
// console.log(age3);

/*
    write a program that tells employees the year they are expected to resign when they supply their real age during an employment exercise. Note that retirement age is 65years.
*/

const calAge4 = (name, birthDate, currentYear) => {
  // the code will display the name and age spent in active service
  const ageOfRetirement = 65;
  const currentAge = currentYear - birthDate;
  const yearResigns = currentYear + (ageOfRetirement - currentAge);
  return `${name} will resign in the year ${yearResigns}`;
};

const yearToResign = calAge4("Dennis", 1982, 2023);
const yearToResign1 = calAge4("Peter", 1999, 2023);
const yearToResign2 = calAge4("Philip", 2000, 2023);
// console.log(yearToResign);
// console.log(yearToResign1);
// console.log(yearToResign2);

// function calling other functions

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

function cutFruitPieces(fruit) {
  return fruit * 4;
}

const fruits = fruitProcessor(5, 7);
console.log(fruits);


// Reviewing functions
