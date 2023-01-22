// Create a generator function pseudoRandom(seed) that takes seed and creates the generator with this formula.
// Usage example:
// let generator = pseudoRandom(1);
// alert(generator.next().value); // 16807 
// alert(generator.next().value); // 282475249 
// alert(generator.next().value); // 1622650073
// https://plnkr.co/edit/kOtrsvIqz7nbmz2b?p=preview&preview
function pseudoRandom(seed) {
  let value = seed;

  value = value * 16807 % 2147483647;
  return value;

  // return function() { 
  //   value = value * 16807 % 2147483647;
  //   return value;
  // }
}
// another answer;
function* pseudoRandom(seed) { 
  let value = seed;
  while(true) {
    value = value * 16807 % 2147483647;
    yield value;
  }
};
