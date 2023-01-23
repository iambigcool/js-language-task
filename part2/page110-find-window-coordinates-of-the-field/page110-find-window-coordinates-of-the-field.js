// In the iframe below you can see a document with the green “field”.
// Use JavaScript to find window coordinates of corners pointed by with arrows.
// https://plnkr.co/edit/EDtjdNk6S43g1SAB?p=preview&preview
let arrowOffset = el.getBoundingClientRect();
// arrow 1
arrowOffset.left, arrowOffset.top;
// arrow 2
arrowOffset.right, arrowOffset.bottom;
// arrow 3
arrowOffset.left + field.clientLeft, arrowOffset.top + field.clientTop;
// arrow 4
arrowOffset.right - getComputedStyle(field).borderRightWidth, arrowOffset.bottom - getComputedStyle(field).borderBottomWidth; // another answer arrowOffset.left + elem.clientLeft + elem.clientWidth, arrowOffset.top + elem.clientTop + elem.clientHeight


// Create a function that positions elem , depending on near element.
// https://plnkr.co/edit/nwn7WjPXNeRuuTg8?p=preview&preview
function positionAt(anchor, position, elem) {
  let anchorOffset = anchor.getBoundingClientRect();
  switch (position) {
    case 'top':
      elem.style.left = anchorOffset.left + 'px';
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
      break;
    case 'bottom':
      elem.style.left = anchorOffset.left + anchor.offsetWidth + 'px';
      elem.style.top = anchorOffset.top + 'px';
      break;
    case 'right':
      elem.style.left = anchorOffset.left + 'px';
      elem.style.top = anchorOffset.top + anchor.offsetHeight + 'px';
      break;
  }
}


// Modify the solution of the previous task so that the note uses position:absolute instead of position:fixed .
function positionAt(anchor, position, elem) {
  let anchorOffset = anchor.getBoundingClientRect();
  switch (position) {
    case 'top':
      elem.style.left = anchorOffset.left + window.pageXOffset + 'px';
      elem.style.top = anchorCoords.top + window.pageYOffset - elem.offsetHeight + 'px';
      break;
    case 'bottom':
      elem.style.left = anchorOffset.left + window.pageXOffset + anchor.offsetWidth + 'px';
      elem.style.top = anchorOffset.top + window.pageYOffset + 'px';
      break;
    case 'right':
      elem.style.left = anchorOffset.left + window.pageXOffset + 'px';
      elem.style.top = anchorOffset.top + window.pageYOffset + anchor.offsetHeight + 'px';
      break;
  }
}


// Extend the previous task Show a note near the element (absolute): teach the function positionAt(anchor, position, elem) to insert elem inside the anchor .
function positionAt(anchor, position, elem) {
  let anchorOffset = anchor.getBoundingClientRect();
  switch (position) {
    case 'top-out':
      elem.style.left = anchorOffset.left + window.pageXOffset + 'px';
      elem.style.top = anchorCoords.top + window.pageYOffset - elem.offsetHeight + 'px';
      break;
    case 'bottom-out':
      elem.style.left = anchorOffset.left + window.pageXOffset + anchor.offsetWidth + 'px';
      elem.style.top = anchorOffset.top + window.pageYOffset + 'px';
      break;
    case 'right-out':
      elem.style.left = anchorOffset.left + window.pageXOffset + 'px';
      elem.style.top = anchorOffset.top + window.pageYOffset + anchor.offsetHeight + 'px';
      break;
    case "top-in":
      elem.style.left = anchorOffset.left + window.pageXOffset + "px";
      elem.style.top = anchorOffset.top + window.pageYOffset + "px";
      break;
    case "right-in":
      elem.style.width = '150px';
      elem.style.left = anchorOffset.left + window.pageXOffset + anchor.offsetWidth - elem.offsetWidth + "px";
      elem.style.top = anchorOffset.top + window.pageYOffset + "px";
      break;
    case "bottom-in":
      elem.style.left = anchorOffset.left + window.pageXOffset + "px";
      elem.style.top = anchorOffset.top + window.pageYOffset + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }
}
