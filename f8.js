// type of operator

// data types 
// A. Primitive dta types
// 1. string  Ex- " naasir" --- having commas
// 2. numbers Ex-  2, 3, 6, 7
// 3. booleans 
// 4. undefined
// 5. null
// 6. Big Int
// 7. symbol

// type operator shows us the which data type
let age = 22;
let firstName = "anas"

console.log(typeof age);
console.log(firstName);
// it shows number & anas

// Convert Number to string
let myage = 22;
console.log(age);
age = age + "";
// add empty string to age it becomes string

console.log(typeof(age));
// Now it shows it is string


// Convert String to number

let yourage = "32";
console.log(typeof yourage);
// It shows string & now to convert in number Add + in ( let yourage = +"32"; )
// it becomes number.

// Another method to change Num-str & str-Num

let nage = 20;
nage = string(nage);
console.log(typeof nage);
// changes to string

let hage = "25";
hage = number(hage);
console.log(typeof hage);
// changes to number 