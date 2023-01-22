// page 28
// 1. Declare two variables: admin and name .
// 2. Assign the value "John" to name .
// 3. Copy the value from name to admin .
// 4. Show the value of admin using alert (must output “John”).
let admin, name;
name = 'John';
admin = name;
alert(admin);

// 1. Create a variable with the name of our planet. How would you name such a variable?
// 2. Create a variable to store the name of a current visitor to a website. How would you name that variable?
let planetName;
let currentUserName;
  
// Examine the following code:
// Here we have a constant birthday for the date, and also the age constant.
// The age is calculated from birthday using someCode() , which means a function call that
// we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is
// calculated somehow based on the birthday .
// Would it be right to use upper case for birthday ? For age ? Or even for both?
const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
const AGE = someCode(BIRTHDAY); // make age uppercase?
// ricky answer: birthday uppercase, age lowercase;
