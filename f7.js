// 1. trim()

let firstName  = "    naasir     ";
console.log(firstName.length);
// now we have to remove spaces in naasir 

firstName.trim();
console.log(firstName.length);
 //no change
// now

let newstring = firstName.trim();
console.log(newstring);
console.log(newstring.length);
// spaces is removes 

// 2. ToUpper case()

let secondName = "Hussain";
console.log(secondName.toUpperCase());
// It prints HUSSAIN ( capital)

// 3. toLowercase 
// It cahnges the words like NAASIR/ NAAsir/ HUSSAIN/ ANas
// it will change all in lower case

// 4. slice()
// Start inder
// end index

let newstringtring = firstName.slice(0,3);
console.log(newstring);

// it will print only 0-3 words of naasir --- naa only.
