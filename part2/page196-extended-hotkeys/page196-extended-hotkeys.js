// Create a function runOnkeys(func, code1, code2, ... code_n) that runs func on simultaneous pressing of keys with codes code1, code2, ...runOnkeys, code_n.
function runOnKeys(func, ...codes) {
  let press = new Set();

  document.addEventListener('keydown', event => {
    press.add(event.code);

    for (let code of codes) {
      if (!press.has(code)) return;
    }

    press.clear();

    func();
  });

  document.addEventListener('keyup', event => {
    press.delete(event.code);
  });

}

runOnKeys(
  () => alert("Hello!"),
  "KeyQ",
  "KeyW"
);
