// There is a salaries object with arbitrary number of salaries.
// Write the function that returns the sum of all salaries using Object.values
// and the for...of loop.
// If salaries is empty, then the result must be 0 .
// For instance:
// let salaries = { "John": 100, "Pete": 300, "Mary": 250};
// alert( sumSalaries(salaries) ); // 650
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary; 
  }
  return sum;
}
//another good answer
return Object.values(salaries).reduce((a, b) => a + b, 0);

// Write a function count(obj) that returns the number of properties in the object:
// let user = {name: 'John', age: 30};
// alert( count(user) ); // 2
// Try to make the code as short as possible.
function count(obj) {
  return Object.keys(obj).length;
}
