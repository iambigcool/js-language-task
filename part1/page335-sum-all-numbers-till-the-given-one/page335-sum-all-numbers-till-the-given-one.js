// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n .
// For instance:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:
// 1. Using a for loop.
// 2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1 . 
// 3. Using the arithmetic progression formula.
// An example of the result:
// function sumTo(n) { /*... your code ... */ } 
// alert( sumTo(100) ); // 5050
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i; 
  }
  return sum;
}

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

function sumTo(n) {
  return n * (n + 1) / 2;
}


// The factorial  of a natural number is a number multiplied by "number minus one" , then by "number minus two" , and so on till 1 . The factorial of n is denoted as n!
// We can write a definition of factorial like this:
// n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different n :
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// The task is to write a function factorial(n) that calculates n! using recursive calls.
// alert( factorial(5) ); // 120
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
// another good answer is:
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):
// let list = { 
//   value: 1, 
//   next: {
//     value: 2, 
//     next: {
//       value: 3, 
//       next: {
//         value: 4,
//         next: null 
//       }
//     } 
//   }
// };
// Write a function that outputs list items one-by-one.
// Make two variants of the solution: using a loop and using recursion.
// What’s better: with recursion or without it?
function printList(list) {
  let tmp = list;
  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}

// Output a single-linked list from the previous task Output a single-linked list in the reverse order.
// Make two solutions: using a loop and using a recursion.
function printReverse(list) {
  if (list.next) { 
    printReverse(list.next);
  }
  alert(list.value);
}

function printReverseList(list) {
  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value); tmp = tmp.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}
