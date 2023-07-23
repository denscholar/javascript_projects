/*
ARRAYS:
only primitive values are immutable. You can mutate an array 
*/
const friends = ["Michael", "James", "Steven", "Peterson"];

friends.push("Ola", "Jameson"); //adding to the array
// console.log(friends);
// console.log(friends.length); // get the lengnth of the array
// console.log(friends[friends.length - 1]); // get the last element

friends[2] = 'Dennis'; // changes the element

// console.log(friends);

// ARRAY METHODS
friends.push('Denscholar'); // add element to the end of the array
// console.log(friends);

friends.unshift('John'); // add element to the begining of the array
// console.log(friends);

friends.pop(); // remove element from the end of the array
console.log(friends);

friends.shift(); //remove element from the beginning of the array
console.log(friends);

console.log(friends.indexOf('Peterson')); // this prints the index position of peterson
console.log(friends.includes('Peterson')); // this prints a boolean values to check if perteson is in the list


