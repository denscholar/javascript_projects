/* 
LOOPS
*/

// For loop

// for (let index = 0; index < 10; index++) {
//     // const element = array[index] ** 2;
//     if (index == 5) break;
//     console.log(index);

// }

// for (let index = 0; index < 10; index++) {
//     // const element = array[index] ** 2;
//     if (index == 5) continue;
//     console.log(index);

// }

const myList = ["John", "Dennis", 1982, "Teacher", true];
// console.log(myList[myList.length - 1]);

// const types = [];

// for (let index = 0; index < dennis.length; index++) {
//   types.push(typeof dennis[index]);
// }

// console.log(types);

// for (let index = 0; index < dennis.length; index++) {
//   types[index] = typeof dennis[index];
// }

// console.log(types);

// looping backward
// const array = [1, 2, 3, 4, 5, 6];
// console.log(array.length - 1]);

for (let index = myList.length - 1; index >= 0; index--) {
  //   console.log(myList[index]);
}

// loop inside a loop

// while loop
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice++;
}

console.log("=====================");
console.log(dice);
