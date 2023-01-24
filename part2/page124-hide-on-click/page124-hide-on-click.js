// Add JavaScript to the button to make <div id="text"> disappear when we click it.
document.querySelector('#hider').addEventListener('click', () => {document.querySelector('#text').hidden = true;});



// Create a button that hides itself on click.
const btn = document.createElement('button');
btn.addEventListener('click', () => {btn.hidden = true});



// There’s a button in the variable. There are no handlers on it.
// Which handlers run on click after the following code? Which alerts show up?
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);
2 // wrong, correct answer is 1, 2. The first handler triggers, because it’s not removed by removeEventListener . To remove the handler we need to pass exactly the function that was assigned. And in the code a new function is passed, that looks the same, but is still another function.



// Move the ball across the field to a click
// Requirements:
// The ball center should come exactly under the pointer on click (if possible without crossing the field edge).
// CSS-animation is welcome.
// The ball must not cross field boundaries.
// When the page is scrolled, nothing should break.
// https://plnkr.co/edit/yi6xXY3XkYDiZbeD?p=preview&preview
const field = document.querySelector('#field');
const ball = document.querySelector('#ball');
const fieldBorderTopWidth = getComputedStyle(field).borderTopWidth;
const fieldBorderLeftWidth = getComputedStyle(field).borderLeftWidth;

field.addEventListener('click', e => {
  const fieldOffset = field.getBoundingClientRect();
  const ballOffset = {
    left: e.clientX - fieldOffset.left - fieldBorderLeftWidth - ball.clientWidth / 2,
    top: e.clientY - fieldOffset.top - fieldBorderTopWidth - ball.clientHeight / 2
  }

  if (ballOffset.left < 0) ballOffset.left = 0;
  if (ballOffset.top < 0) ballOffset.top = 0;

  // wrong:  missing prevent crossing the right/bottom field boundary
  // if (ballOffset.left + ball.clientWidth > field.clientWidth) {
  //   ballOffset.left = field.clientWidth - ball.clientWidth;
  // }

  // if (ballOffset.top + ball.clientHeight > field.clientHeight) {
  //   ballOffset.top = field.clientHeight - ball.clientHeight;
  // }

  ball.style.left = ballOffset.left + 'px';
  ball.style.top = ballOffset.top + 'px';
});



// Create a menu that opens/collapses on click:
// https://plnkr.co/edit/sDzWgqYxeNrla3Kz?p=preview&preview
// ricky answer:
// HTML:
<div>
  <span class="title">Sweeties!</span>
  <ul class="menu">
    <li>Cake</li>
    <li>Donut</li>
    <li>Honey</li>
  </ul>
</div>
// CSS:
// .menu {
//   display: none;
// }
// .menu.active {
//   display: block;
// }
const menu = document.querySelector('.menu');
const title = document.querySelector('.title');
title.addEventListener('click', () => {
  menu.classList.toggle('active');
});


// Add a closing button
// Use JavaScript to add a closing button to the right-upper corner of each message.
// https://plnkr.co/edit/bIotBX876EI3kDzy?p=preview&preview
// HTML:
<div class="pane">
  <button class="btn"></button>
  <h3>Horse</h3>
  <p></p>
</div>
// JS:
const panes = document.querySelectorAll('.pane');

for (let pane of panes) {
  // another answer: add html in the JS
  // pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  // pane.firstChild.onclick = () => pane.remove();
  pane.firstElementChild.addEventListener('click', () => {
    pane.remove();
  });
}



// Create a “carousel” – a ribbon of images that can be scrolled by clicking on arrows.
// see carousel.html
