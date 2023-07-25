// JavaScript Template Literals
// Before ES6, you use single quotes (') or double quotes (") to wrap a string literal. And the strings have very limited functionality.

// To enable you to solve more complex problems, ES6 template literals provide the syntax that allows you to work with strings more safely and cleanly.

// In ES6, you create a template literal by wrapping your text in backticks (`).

let simple = `Template literal in ES6 `;
console.log(simple);

// and you get the following features:

// A multiline string: a string that can span multiple lines.
// String formatting: the ability to substitute part of the string for the values of variables or expressions. This feature is also called string interpolation.
// HTML escaping: the ability to transform a string so that it is safe to include in HTML.

let anotherStr = `Here's a template literal`;
console.log(anotherStr);




// Variable and expression substitutions
let firstName = 'John',
    lastName = 'Doe';

let greeting = `Hi ${firstName}, ${lastName}`;



let price = 8.99;
let tax = 0.1;

let netPrice = `Net Price:$${(price * (1 + tax)).toFixed(2)}`;

console.log(netPrice); // netPrice:$9.89


// HTML substitution


let { title, excerpt, body, tags } = post;

let postHtml = `<article>
<header>
    <h1>${title}</h1>
</header>
<section>
    <div>${excerpt}</div>
    <div>${body}</div>
</section>
<footer>
    <ul>
      ${tags.map((tag) => `<li>${tag}</li>`).join("\n      ")}
    </ul>
</footer>`;
