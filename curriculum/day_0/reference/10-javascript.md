# JavaScript

TODO: MDN, difference between undefined and null, arity

In this curriculum, you will not need to memorize all the JavaScript patterns below. Use this document as a reference, and refer back to it when you need it.

## Setup

## Console

Using the console.log method, you can print content to the terminal. Don’t worry about understanding a method or the syntax yet.

```js
console.log("Hello World!");
```

## Variables

JavaScript has three types of variable declarations: `const`, `let`, and `var`. Use `const` for variables that do not change. Use `let` for variables that change. Try to avoid `var`, but be aware that you may find it in legacy code. You can assign variables with the `=` operator.

```js
const hello = "Hello World!";

let greeting = "hi";
greeting = "hi hi";

console.log(hello); // 'Hello World!'
console.log(greeting); // 'hi hi'
```

### Value types

JavaScript has several builtin value types. You’ve already worked with strings. There are also numbers, booleans, undefined, null, symbols, and BigInt. We won’t cover symbols and BigInt in this review.

```jsx
const myString = "A String of Characters";
const myTemplateLiteral = `
  A
  Multiline
  ${myString}
`;
console.log(myTemplateLiteral);
const myNumber = 3;
const myBoolean = true; // or false
let myUndefinedVariable; // = undefined;
let myNullVariable = null;
```

A template literal is just another way to write a multiline string.

### Reference types

JavaScript has many reference types: objects, arrays, maps, sets, weakmaps, weaksets, dates, and more. The most common are objects and arrays. Objects hold key and value pairs, while arrays are lists of values.

```js
const myObject = {
  key: "value",
};
const myArray = [1, 2, "fish"];
```

#### Objects

Here are examples on how to access and mutate (change) objects.

```js
// accessing objects
let myCar = {
  maker: "Buick",
  year: 2003,
  key: `
     8 8 8 8                     ,ooo.
     8a8 8a8                    oP   ?b
    d888a888zzzzzzzzzzzzzzzzzzzz8     8b
     '""^""'                    ?o___oP'
  `,
  "Legal Jargon": "tl;dr legal",
};

// accessing and mutating objects
console.log("Old Car:", myCar.year);
myCar.year = 2010;
console.log("New Car:", myCar.year);

// accessing irregular keys
console.log(myCar["Legal Jargon"]);

// accessing objects with variables
const myCarKey = "key";
console.log(myCar[myCarKey]);
```

#### Arrays

Here are examples on how to access and mutate (change) arrays.

```js
// accessing arrays
let groceryList = ["cheese", "more cheese", "CHEESE"];
// zero indexing
console.log(groceryList[3]); // undefined
console.log(groceryList[0]); // 'cheese'

// mutating arrays
console.log(groceryList[1]); // 'more cheese'
groceryList[1] = "tortillas";
console.log(groceryList[1]); // 'tortillas'

// adding and removing items from arrays

// add item to end
groceryList.push("SO MUCH CHEESE");
// remove item from end
groceryList.pop();
// add item to beginning
groceryList.unshift("plates");
// remove item from beginning
groceryList.shift();
```

#### Complex Data Structures

Objects and array can be nests to model complex data. We can chain together our access methods to access this nested data.

```js
const books = [
  {
    title: "Crime and Punishment",
    ratings: [5, 4, 5],
  },
  {
    title: "Programming is Hard",
    ratings: [5, 4, 3],
  },
];
console.log("Nested rating", books[0].ratings[0]); // 5
```

#### JSON

JSON stands for JavaScript Object Notation. It is a very common format for reading and writing data. JSON is similar to the objects and arrays we have already learned, but all keys have to be in "double quotes".

```js
const booksJson = [
  {
    title: "Crime and Punishment",
    ratings: [5, 4, 5],
  },
  {
    title: "Programming is Hard",
    ratings: [5, 4, 3],
  },
];
```

## Math

You can perform basic math with JavaScript and use the order of operations. When you change a variable, be sure to set its value.

```js
let myLuckyNumber = 7;
console.log("Plus 1", myLuckyNumber + 1); // 8
console.log("Variable", myLuckyNumber); // 7

// to update, must set the variable
myLuckyNumber = myLuckyNumber + 1; // 8
myLuckyNumber += 1; // 9
myLuckyNumber++; // 10

const myEquation = 1 + (((2 / 3) * 7) % 8);
```

## Conditionals

Conditions are if statements. If this, do that, else do the other thing. To understand conditionals, we must understand equality and truthiness.

### Equality and inequality

- `=` assigns variables
- `==` checks equality and converts types
- `===` strict equality without type conversion (preferred)

```js
// assign variable
const price = 20;

// true, type coersion, try to avoid
console.log(price == "20");

// false, string and number types are not equal
console.log(price === "20");

// true, types are equal
console.log(price === Number("20"));
console.log(price === 20);

// inequalities
console.log(price > 10); // true
console.log(price >= 30); // false
```

### If statements

If statements allow you to run different code depending on the condition. You can run multiple checks with `else if` and run `else` if the previous conditions are false.

```js
let time = 9;
if (time < 12) {
  console.log("Good morning");
} else if (time < 18) {
  console.log("Good afternoon");
} else if (time < 22) {
  console.log("Good evening");
} else {
  console.log("Good night");
}
```

### Truthiness

You do not have to use equalities in if statements, you can just check if a value is truthy or falsy.

```js
let dogName = "Roxie";
if (dogName) {
  console.log(`I love my dog ${dogName}`);
}
```

Be aware that truthy and falsy values are not always what you think they are.

```js
let debt = 0;
if (debt) {
  console.log("Try to save more money this month");
  // 0, false, empty strings, null, undefined, and NaN all falsey
  // this code will run even if your debt is 0
}
```

### Logical operators

- `||` - Logical OR operator
- `&&` - Logical AND operator
- `!` - Logical NOT operator

```js
let isWeekend = true;
let isMorning = false;
let isWorkDone = true;

if (!isWeekend) {
  console.log("week day");
}
if (isWeekend && isMorning) {
  console.log("snooze");
}
if (isWorkDone || isWeekend) {
  console.log("fun");
}
```

### Ternary operator

The ternary operator is like an `if…else` statement, but it fits in a single line.

```js
// condition ? exprIfTrue : exprIfFalse
const isLuckyDay = myLuckyNumber === 7 ? true : false;
```

### Immutability

TODO: with reference types

## Functions

```js
// function keyword
function greeterOne() {
  return "Hello World 1";
}
greeterOne();

// arrow function
const greeterTwo = () => {
  return "Hello World 2";
};
greeterTwo();

// arrow function with implicit return
const greeterThree = () => "Hello World 3";
greeterThree();
```

### Methods

```js
const greeterObject = {
  // function keyword
  greeterFour: function () {
    return "Hello World 4";
  },
  // function shorthand without keyword
  greeterFive() {
    return "Hello World 5";
  },
  // arrow function
  greeterSix: () => {
    return "Hello World 6";
  },
  // arrow function with implicit return
  greeterSeven: () => "Hello World 7",
};

greeterObject.greeterFour();
greeterObject.greeterFive();
greeterObject.greeterSix();
greeterObject.greeterSeven();
```

### Parameters and arguments

```js
let friendlyGreeter = (name, greeting) => `${greeting} ${name}!`;
friendlyGreeter("Bob", "Hi"); // Hi Bob

// Default values
friendlyGreeter(); // undefined undefined
friendlyGreeter = (name = "there", greeting = "Hello") =>
  `${greeting} ${name}!`;
friendlyGreeter(); // Hello there
```

## Destructuring

```js
const person = {
  name: "Billy",
  age: 7,
  favoriteColor: "green",
  country: "USA",
};
const { name, age, ...personalInfo } = person;

const rgb = ["red", "green", "blue"];
const [firstColor, ...otherColors] = rgb;

// destructuring inside a function
friendlyGreeter = ({ name }) => console.log(`Hello ${name}`);

friendlyGreeter(person);
person.name = undefined;
friendlyGreeter(person);

// with default variables
friendlyGreeter = ({ name = "there" }) => console.log(`Hello ${name}`);

friendlyGreeter(person);

// safe without object
friendlyGreeter = ({ name = "there" } = {}) => console.log(`Hello ${name}`);

friendlyGreeter();

// with renaming
const { name: firstName } = person;

friendlyGreeter = ({ name: firstName = "there" } = {}) =>
  console.log(`Hello ${firstName}`);
```

TODO: function, destructuring, defaults, and renaming in that order.

## Imports

```js
export const cyan = "cyan";
export const magenta = "magenta";
export const yellow = "yellow";
export const key = "black";

const cmyk = ["cyan", "magenta", "yellow", "key"];
export default cmyk;
```

```js
import { cyan, magenta } from "./cmyk";
console.log(cyan, magenta);

import cmyk, { yellow } from "./cmyk";
console.log(cmyk);

import * as colors from "./cmyk";
console.log(colors.magenta);
```

## Loops

```js
for (let i = 0; i < groceryList.length; i++) {
  console.log(groceryList[i].toUpperCase());
}

groceryList.forEach((item, index) => console.log(item.toUpperCase(), index));

console.log(groceryList);

// changing items
// * note .forEach does not return an array like map
groceryList = groceryList.map((item) => item.toUpperCase());
console.log(groceryList);

// map takes a function
const addTwo = (num) => num + 2;
let ratings = [6, 7, 8];
ratings = ratings.map(addTwo);
console.log(ratings);

// reduce
const average = ratings.reduce((acc, val) => acc + val, 0) / ratings.length;
console.log(average);

// Objects
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
```

## Asynchronous functions

```js
// TODO: error first
const takesTimeCallback = setTimeout(() => console.log("callback done"), 500);

const takesTimePromise = new Promise((resolve, reject) =>
  setTimeout(() => resolve("done"), 500)
);
takesTimePromise
  .then((data) => console.log("promise", data))
  .catch((error) => console.log(error));

const outerAsyncFunction = async () => {
  const takesTimeAsync = await new Promise((resolve, reject) =>
    setTimeout(() => resolve("done"), 500)
  );
  console.log("await", takesTimeAsync);
};
outerAsyncFunction();
```

## Asynchronous loops

```js
(async () => {
  const addThree = (num) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(num + 3), 500));

  // undefined
  let grades = [97, 90, 85];
  grades = grades.map(addThree);
  console.log("grades", grades);

  // parallel
  grades = await Promise.all(grades);
  console.log("grades", grades);

  // synchronous
  let curvedGrades = [];
  for (const grade of grades) {
    const curvedGrade = await addThree(grade);
    curvedGrades.push(curvedGrade);
  }
  console.log("curved grades", curvedGrades);
})();
```

## Libraries

```txt
42
```

```js
// import 3rd party library
// async example
import fs from "fs-extra";

// often called main or start, not outerAsyncFunction
// alternative is iffe
(async () => {
  let meaningOfLife;
  try {
    meaningOfLife = await fs.readFile("./src/meaningOfLife.txt", "utf-8");
  } catch (error) {
    console.log(error);
  }
  console.log(meaningOfLife.trim());
})();
```

## Practice

In Nodejs, using [SWAPI](https://swapi.dev/api/planets/) (the Star Wars API):

- Fetch all the pages of the planets (with [axios](https://www.npmjs.com/package/axios))
- Filter out any planets with an unknown population
- Log all planet names with their populations to the console
  - Log any planets with a population over 1 million in green (with [chalk](https://www.npmjs.com/package/chalk))

## Optional

- [Event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- VS Code plugins
  - [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [TabNine Autocomplete AI](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)

## [Next lesson →](./11-surge.md)
