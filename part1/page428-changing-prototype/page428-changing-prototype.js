// In the code below we create new Rabbit , and then try to modify its prototype.
// In the start, we have this code:
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// alert( rabbit.eats ); // true
// 1.
// We added one more string (emphasized). What will alert show now?
// function Rabbit() {} 
// Rabbit.prototype = {
//   eats: true 
// };
// let rabbit = new Rabbit();
// Rabbit.prototype = {};
// alert( rabbit.eats ); // ?
// 2.
// ...And if the code is like this (replaced one line)?
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit(); 
// Rabbit.prototype.eats = false; 
// alert( rabbit.eats ); // ?
// 3.
// And like this (replaced one line)?
// function Rabbit() {} 
// Rabbit.prototype = {
//   eats: true 
// };
// let rabbit = new Rabbit();
// delete rabbit.eats;
// alert( rabbit.eats ); // ?
// 4.
// The last variant:
// function Rabbit() {} 
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit(); 
// delete Rabbit.prototype.eats; 
// alert( rabbit.eats ); // ?
true,
false,
undefined, //wrong correct is true, delete rabbit.eats is trying removing from rabbit, but it doesn't have it. All delete operations are applied directly to the object.
undefined

// Imagine, we have an arbitrary object obj , created by a constructor function – we don’t know which one, but we’d like to create a new object using it.
// Can we do it like that?
// let obj2 = new obj.constructor();
// Give an example of a constructor function for obj which lets such code work right. And an example that makes it work wrong.
function Obj(name) {
  this.name = name;
}
// add following code then get wrong:
Obj.prototype = {}
