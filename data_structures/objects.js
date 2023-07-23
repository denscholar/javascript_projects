/*
OBJECTS
in objects, we define key value pairs. there are many ways of creating an object but the mosst popular is the object literals which is shown below:

We use objects to group different variable related together. in object the order doesnt matter unlike the arrays. We use arrays for more ordered data and object for more structed data.
*/

const person = {
  firstName: "John",
  lastName: "Dennis",
  birthYear: 1982,
  job: "Teacher",
  friends: ["Peter", "Steven", "Michael"],
  calAge: function (rate) {
    this.age = 2037 - this.birthYear;
    this.bmi = rate * 10000;
    return `His age is ${this.age} and his bmi is ${this.bmi}`;
  },
};
// console.log(dennis);

// how to remove and retrieve data from the object

// console.log(dennis.lastName);
// console.log(dennis.firstName);

// We can use the bracket notation
// console.log(dennis['lastName']);

// OBJECTS METHODS

// function calAge(){
//     return birthYear - age
// }
console.log(person.calAge(0.2));
console.log(person);
