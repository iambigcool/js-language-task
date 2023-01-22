// Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.
// After you do it, such code should work:
// function f() {
//   alert("Hello!");
// }
// f.defer(1000); // shows "Hello!" after 1 second
Function.prototype.defer = function(time) {
  setTimeout(this, time);
}

// Add to the prototype of all functions the method defer(ms) , that returns a wrapper, delaying the call by ms milliseconds.
// Here’s an example of how it should work:
// function f(a, b) {
//   alert( a + b );
// }
// f.defer(1000)(1, 2); // shows 3 after 1 second
//didn't answer, correct answer is the following:
Function.prototype.defer = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms); 
  }
};
