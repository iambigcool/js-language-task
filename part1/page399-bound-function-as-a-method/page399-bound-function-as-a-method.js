// What will be the output?
// function f() {
//   alert( this ); // ?
// }
// let user = {
//   g: f.bind(null)
// };
// user.g();
null

// Can we change this by additional binding?
// What will be the output?
// function f() { 
//   alert(this.name);
// }
// f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
// f();
John

// There’s a value in the property of a function. Will it change after bind ? Why, or why not?
// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({ name: "John"});
// alert( bound.test ); // what will be the output? why?
undefined, bind is different

// It leads to an error. Why?
// Fix the highlighted line for everything to start working right (other lines are not to be changed).
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//     else fail();
// }
// let user = {
  // name: 'John',
  // loginOk() {
  // alert(`${this.name} logged in`);
  // },
  // loginFail() {
  //   alert(`${this.name} failed to log in`);
  // },
// };
// askPassword(user.loginOk, user.loginFail); // highlighted
askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // another answer askPassword(() => user.loginOk(), () => user.loginFail());

// What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail ?
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//     else fail();
//   }
//   let user = { name: 'John',
//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };
// askPassword(?, ?); // ?
askPassword(user.login.bind(user, true), user.login.bind(user, false)); // another answer askPassword(() => user.login(true), () => user.login(false));
