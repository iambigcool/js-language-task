// Create a proxy that throws an error for an attempt to read of a non-existent property instead.
// That can help to detect programming mistakes early.
// Write a function wrap(target) that takes an object target and return a proxy that adds this functionality aspect.
// That’s how it should work:
// let user = { 
//   name: "John"
// };
// function wrap(target) { 
//   return new Proxy(target, {
//   /* your code */
//   }); 
// }
// user = wrap(user);
// alert(user.name); // John
// alert(user.age); // ReferenceError: Property doesn't exist: "age"
// didn't answer, the following is the correct answer
function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new ReferenceError(`Property doesn't exist: "${prop}"`) }
    }
  });
}

// In some programming languages, we can access array elements using negative indexes, counted from the end.
// Create a proxy to implement that behavior.
// That’s how it should work:
// let array = [1, 2, 3];
// array = new Proxy(array, { 
//   /* your code */
// });
// alert( array[-1] ); // 3
// alert( array[-2] ); // 2
array = new Proxy(array, { 
  get(target, prop, receiver) {
    if (prop < 0) {
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop, receiver);
  }
});

// Create a function makeObservable(target) that “makes the object observable” by returning a proxy.
// Here’s how it should work:
// function makeObservable(target) { 
//   /* your code */
// }
// let user = {};
// user = makeObservable(user);
// user.observe((key, value) => { 
//   alert(`SET ${key}=${value}`);
// });
// user.name = "John"; // alerts: SET name=John
// didn't answer, the correct answer is the following
function makeObservable(target) {
  // 1. Initialize handlers store
  target[handlers] = [];

  // Store the handler function in array for future calls
  target.observe = function(handler) {
    this[handlers].push(handler); 
  };

  // 2. Create a proxy to handle changes
  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); // forward the operation to object
      if (success) { // if there were no error while setting the property
        // call all handlers
        target[handlers].forEach(handler => handler(property, value));
      }
      return success; 
    }
  });
}
