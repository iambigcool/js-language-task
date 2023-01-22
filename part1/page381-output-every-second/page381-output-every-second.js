// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to .
// Make two variants of the solution. 
// 1. Using setInterval .
// 2. Using nested setTimeout .
function printNumbers(from, to) {
  let timerId = setInterval(() => {
    alert(from);
    if (from == to) {
      clearInterval(timerId);
    }
    from++;
  }, 1000);
}
setTimeout(function timer() {
  alert(from);
  if (from < to) {
    setTimeout(timer, 1000);
  }
  from++;
}, 1000);

// In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.
// When will the scheduled function run?
// 1. After the loop.
// 2. Before the loop.
// 3. In the beginning of the loop.
// What is alert going to show?
// let i = 0;
// setTimeout(() => alert(i), 100); // ?
// // assume that the time to execute this function is >100ms
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }
100000000
