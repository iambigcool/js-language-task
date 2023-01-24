// Create an endless page. When a visitor scrolls it to the end, it auto-appends current date-time to the text (so that a visitor can scroll more).
// https://plnkr.co/edit/9og7bth6RKWq4fnw?p=preview&preview
// see endless-page.html



// Create a “to the top” button to help with page scrolling.
// https://plnkr.co/edit/DqgU6NJ1rB6Wdq42?p=preview&preview
// see to-top.html



// Scroll it to see images load “on-demand”.
// https://plnkr.co/edit/ZmiPqJnvJuXPBPzc?p=preview&preview
function isVisible(elem) {
  let elemOffset = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  let topVisible = elemOffset.top < windowHeight && elemOffset.top > 0;
  let bottomVisible = elemOffset.bottom > 0 && elemOffset.bottom < windowHeight;

  return topVisible || bottomVisible;
}
