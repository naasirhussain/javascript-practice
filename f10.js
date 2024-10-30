// Template string
 
let age = 22;
let fullName = "naasirhussain";
// is we want to print "my name is naasir and my age is 22"

let aboutMe = "my name " + fullName + " and mu age is" + age;
// this is normal method
// when console aboutMe , It prints my name is naasirhussain and my age is 22

// now template method
let aboutyou =   `my name is ${fullName} and my age is ${age}`
console.log(aboutyou);
// after console aboutyou it prints ( my name is naas-----------------------------)
