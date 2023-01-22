// What is the result of this code?
// let user = {
//   name: "John",
//   go: function() { alert(this.name) }
// }
// (user.go)()
John //wrong, will get an Error because let user = {} missing ';'. 

// In the code below we intend to call obj.go() method 4 times in a row.
// But calls (1) and (2) works differently from (3) and (4) . Why?
// let obj, method;
// obj = {
//   go: function() { alert(this); }
// };
// obj.go(); // (1) [object Object]
// (obj.go)(); // (2) [object Object]
// (method = obj.go)(); // (3) undefined
// (obj.go || obj.stop)(); // (4) undefined
// original answer: (1) and (2) are same, but think (4) is the same as them. (3 didn't know)
// correct answer, (1) & (2) are same. (3) & (4) are similar because Any operation on it except a method call (like assignment = or || ) turns it into an ordinary value, which does not carry the information allowing to set this .
