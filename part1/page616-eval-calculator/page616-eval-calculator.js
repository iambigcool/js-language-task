// Create a calculator that prompts for an arithmetic expression and returns its result.
// There’s no need to check the expression for correctness in this task. Just evaluate and return the result.
function calc() {
  let expression = prompt("whats the result?", '10+20*3');
  return  eval(expression);
}
