// What is the last value alerted by this code? Why?
// let i = 3;
// while (i) {
//   alert( i-- );
// }
1

// For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not?
// 1.The prefix form ++i :
// let i = 0;
// while (++i < 5) alert( i );
// 2.The postfix form i++
// let i = 0;
// while (i++ < 5) alert( i );
same 1-4 // wrong, correct is first is 1-4, second is 1-5.

// For each loop write down which values it is going to show. Then compare with the answer.
// Both loops alert same values or not?
// 1.for (let i = 0; i < 5; i++) alert( i );
// 2.for (let i = 0; i < 5; ++i) alert( i );
same 1-4 // wrong, correct is same 0-4.

// Use the for loop to output even numbers from 2 to 10 .
for (let i=2; i <=10; i +=2) {
  alert(i)
}
// good answer
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
let i;
while(++i < 3) {
  alert( `number ${i}!` );
}
//wrong, correct should be the following
let i=0;
while(i < 3) {
  alert( `number ${i}!` );
  i++;
}

// Write a loop which prompts for a number greater than 100 . If the visitor enters another number –
// ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or
// cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special
// handling for a non-numeric input in this task.
let answer = prompt('Input number here!');
do {
  break;
} while (answer > 100)
//wrong, correct should be the following
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// An integer number greater than 1 is called a prime  if it cannot be divided without a remainder
// by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n .
// For example, 5 is a prime, because it cannot be divided without a remainder by 2 , 3 and 4 .
// Write the code which outputs prime numbers in the interval from 2 to n .
// For n = 10 the result will be 2,3,5,7 .
// P.S. The code should work for any n , not be hard-tuned for any fixed value.
// correct answer is the following
let num = 100
outer: for(i=2;i<num;i++) {
  for(j=2;j<num;j++) {
    if (i % j === 0) {
      continue outer;
    } else {
      console.log(i);
    }
  }
}
