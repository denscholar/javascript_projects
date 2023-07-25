/*
Var, Let and const

In ES6, one of the interesting features which came out is let and const. To be brief, both are used for variable declaration. The main question is, what makes them different from each other. Let’s find the answer to this question.

Introduction to var

Before the era of ES6, var used to rule the world. But, there were many issues with the usage and declaration of var. Hence, it became necessary to emerge new ways to overcome the flaws. This led to the invention of let and const.

Scope of var
As the name suggests, scope refers to the boundary or area up to which the variable can be accessed and used. The variables declared under var are global and can be accessed locally too. Var variables can also have function type scope.

Let’s say if any variable is declared outside the function block and can be accessed through the program, then that variable is global. The same work is done by global var type variables. The variables declared with var can be accessed throughout the window.

The scope of var is a function when the variables are declared within any function body. This means they are accessible inside the function body only.


var temp = "hey there";
    
    function newFunction() {
        var user = "hello World";
    }


Redeclaration and reuse: var
The variables declared under var can be reused and redeclared. But the constraint is, this should be done within the same scope.

var temp = "Hey There";
var temp = "Hello Coders";
var temp = "Coding Ninja"; 



Const with var

var temp = "Hello World";
var count = 4;

    if (count > 3) {
        var temp = "Hello coders"; 
    }
    
    console.log(temp) // "Hello Coders"



Let
To overcome the scenario discussed above, let type variables be used. In other words, it is an improved version of var. But the question is, how can the above problem be solved by let's find it out.

Let is block scoped. Block is nothing but a chuck of some code bounded within {}(curly braces). Anything that is written inside these braces, is a block. So, any variable that is defined within a block remains accessible to that block only. Let’s take an example:

*/


// var temp = "Hello World";
// var count = 4;

// if (count > 3) {
//   var temp = "Hello coders";
// }

// console.log(temp);
