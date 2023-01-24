// There’s a list of messages with removal buttons [x] . Make the buttons work.
// https://plnkr.co/edit/yJWlA1LCUowhwVGG?p=preview&preview
const container = document.querySelector('#container');
container.addEventListener('click', e => {
  // missing if (e.target.className != 'remove-button') return;
  const pane = e.target.closest('.pane');
  pane.remove();
});




// Create a tree that shows/hides node children on click:
// 1.Only one event handler (use delegation); 2. A click outside the node title (on an empty space) should not do anything.
const items = document.querySelectorAll('li');
const tree = document.querySelector('#tree');
for (let item of items) {
  item.classList.add('item');

  tree.addEventListener('click', e => {
    const children = e.target.parentNode.querySelector('ul');
    if (e.target.classList.contains('item') && children) {
      children.hidden = !children.hidden;
    }
  });
}
// wrong, correct answer is:
for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling); // move the text node into span
}
tree.onclick = function(event) { // catch clicks on whole tree
  if (event.target.tagName != 'SPAN') {
    return;
  }
  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) return; // no children
  childrenContainer.hidden = !childrenContainer.hidden;
}



// Make the table sortable: clicks on <th> elements should sort it by corresponding column.
// https://plnkr.co/edit/Xy6bIm1THcPADrDN?p=preview&preview
// correct answer;
grid.onclick = function(e) {
  if (e.target.tagName != 'TH') return;

  let th = e.target;
  // if TH, then sort
  // cellIndex is the number of th:
  //   0 for the first column
  //   1 for the second column, etc
  sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
  let tbody = grid.querySelector('tbody');

  let rowsArray = Array.from(tbody.rows);

  // compare(a, b) compares two rows, need for sorting
  let compare;

  switch (type) {
    case 'number':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
      };
      break;
  }

  // sort
  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}




// Create JS-code for the tooltip behavior.
// When a mouse comes over an element with data-tooltip , the tooltip should appear over it, and when it’s gone then hide.
// https://plnkr.co/edit/qzyeY4q7GxRXgqc2?p=preview&preview
// see tooltip.html
