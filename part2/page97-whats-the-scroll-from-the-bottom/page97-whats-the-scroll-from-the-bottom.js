// The elem.scrollTop property is the size of the scrolled out part from the top. How to get the size of the bottom scroll (let’s call it scrollBottom )?
let elem.scrollBottom = elem.scrollHeight - elem.clientHeight - elem.scrollTop;


// Write the code that returns the width of a standard scrollbar.
// For Windows it usually varies between 12px and 20px . If the browser doesn’t reserve any space for it (the scrollbar is half-translucent over the text, also happens), then it may be 0px .
let scrollBarWidth = element.offsetWidth - element.clientWidth;


// Place the ball in the field center (Page 97).
// https://plnkr.co/edit/xkru9S3bh1Ihfr9y?p=preview&preview
left = field.clientWidth / 2 - ball.offsetWidth / 2; // correct answer is Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
top = field.clientHeight / 2 - ball.offsetHeight / 2; // correct answer is Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';


// What’s the difference between getComputedStyle(elem).width and elem.clientWidth ? Give at least 3 differences. The more the better.
// ricky answer: 1. .width is a css property, .clientWidth is js; 2. .clientWidth is inside width of an element without scrollbar;
// correct answer is :
// 1. clientWidth is numeric, getComputedStyle(elem).width is returns a string with px;
// 2. getComputedStyle(elem).width may return non-numeric width like "auto" for an inline element.
// 3. clientWidth is the inner content area of the element plus paddings, while CSS width (with standard box-sizing ) is the inner content area without paddings.
// 4. If there’s a scrollbar and the browser reserves the space for it, some browser substract that space from CSS width (cause it’s not available for content any more), and some do not. The clientWidth property is always the same: scrollbar size is substracted if reserved.
