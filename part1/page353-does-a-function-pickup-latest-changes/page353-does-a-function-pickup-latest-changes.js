// The function sayHi uses an external variable name. When the function runs, which value is it going to use?
// let name = "John";
// function sayHi() { alert("Hi, " + name);}
// name = "Pete";
// sayHi(); // what will it show: "John" or "Pete"?
// Such situations are common both in browser and server-side development. A function may be scheduled to execute later than it is created, for instance after a user action or a network request.
// So, the question is: does it pick up the latest changes?
Pete

// The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.
// Will it have access to the outer variables from its creation place, or the invocation place, or both?
// function makeWorker() { 
//   let name = "Pete";
//   return function() {
//     alert(name);
//   };
// }
// let name = "John"; // create a function
// let work = makeWorker();
// // call it
// work(); // what will it show?
// Which value it will show? “Pete” or “John”?
Pete

// Here we make two counters: counter and counter2 using the same makeCounter function.
// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?
// function makeCounter() {
//   let count = 0;
//   return function() {
//     return count++;
//   };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
// alert( counter() ); // 0 alert( counter() ); // 1
// alert( counter2() ); // ? alert( counter2() ); // ?
0,
1

// Here a counter object is made with the help of the constructor function.
// Will it work? What will it show?
// function Counter() {
//   let count = 0;
//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//   return --count;
//   };
// }
// let counter = new Counter();
// alert( counter.up() ); // ? 
// alert( counter.up() ); // ? 
// alert( counter.down() ); // ?
1,
2, 
1

// Look at the code. What will be the result of the call at the last line?
// let phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {alert(`${phrase}, ${user}`);} 
// }
// sayHi();
Error

// Write function sum that works like this: sum(a)(b) = a+b .
// Yes, exactly this way, using double parentheses (not a mistype). For instance:
// sum(1)(2) = 3
// sum(5)(-1) = 4
function sum(a) {
  return function(b) {
    return a + b;
  };
}

// What will be the result of this code?
// let x = 1;
// function func() {
//   console.log(x); // ? 
//   let x = 2;
// }
// func();
1 // wrong, would get an error, Cannot access 'x' before initialization


// We have a built-in method for arr.filter(f) for arrays. It filters all elements through the function f . If it returns true, then that element is returned in the resulting array.
// Make a set of “ready to use” filters:
// inBetween(a, b) – between a and b or equal to them (inclusively). 
// inArray([...]) – in the given array.
// The usage must be like this:
// arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
// arr.filter(inArray([1, 2, 3]))– selects only elements matching with one of the
// members of [1, 2, 3]. For instance:
// /* .. your code for inBetween and inArray */ let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
function inBetween(a, b) {
  return function(value) {
    return value >= a && value <= b;
  };
}
function inArray(arr) {
  return function(value) {
    return arr.includes(value);
  };
}

// We’ve got an array of objects to sort:
// let users = [{ name: "John", age: 20, surname: "Johnson" }, { name: "Pete", age: 18, surname: "Peterson" }, { name: "Ann", age: 19, surname: "Hathaway" }];
// The usual way to do that would be:
// // by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);
// // by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Can we make it even less verbose, like this?
// users.sort(byField('name'));
// users.sort(byField('age'));
// So, instead of writing a function, just put byField(fieldName) .
// Write the function byField that can be used for that.
function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

// The following code creates an array of shooters .
// Every function is meant to output its number. But something is wrong...
// function makeArmy() {
//   let shooters = [];
//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // create a shooter function,
//       alert( i ); // that should show its number
//     };
//     shooters.push(shooter); // and add it to the array
//     i++;
//   }
//   // ...and return the array of shooters
//   return shooters;
// }
// let army = makeArmy();
// // all shooters show 10 instead of their numbers 0, 1, 2, 3... army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.
// Why do all of the shooters show the same value?
// Fix the code so that they work as intended.
for(let i = 0; i < 10; i++) {xxxx}
