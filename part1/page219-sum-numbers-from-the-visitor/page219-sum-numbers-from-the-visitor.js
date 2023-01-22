// Create a script that prompts the visitor to enter two numbers and then shows their sum.
let a = +prompt('number1?', '');
let b = +prompt('number2?', '');
let sum  = a + b;

// According to the documentation and toFixed both round to the nearest number: 0..4 lead down while 5..9  lead up.
// For instance:
// alert( 1.35.toFixed(1) ); // 1.4
// In the similar example below, why is 6.35 rounded to 6.3 , not 6.4 ?
// alert( 6.35.toFixed(1) ); // 6.3
// How to round 6.35 the right way?
// didd't answer, the coorect answer is following:
alert( Math.round(6.35 * 10) / 10 );

// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that
// case, the function should return null .
function readNumber() {
  let value;
  do {
    value = prompt('enter ur number?');
  } while (!isNaN(value));
  if (value === null || value === '') return null;
  return value;
}

// This loop is infinite. It never ends. Why?
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
i != 10 wrong

// The built-in function Math.random() creates a random value from 0 to 1 (not including 1 ). Write the function random(min, max) to generate a random floating-point number from min
// to max (not including max ). Examples of its work:
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525
function random(n, m) {
  return Math.random()*(m-n)+n;
}

// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
// Any number from the interval min..max must appear with the same probability. Examples of its work:
// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5
function randomInteger(n, m) {
  return Math.round(Math.random()*(m-n)+n);
}
//wrong, correct answer is the following:
function randomInteger(min, max) {
  // now rand is from (min-0.5) to (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1); return Math.round(rand);
}
//or
function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max - min + 1); return Math.floor(rand);
}
