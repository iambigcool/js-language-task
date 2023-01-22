// Look at this page:
// <html> 
//   <body>
//     <div>Users:</div>
//       <ul>
//         <li>John</li>
//         <li>Pete</li>
//       </ul>
//   </body>
// </html>
// For each of the following, give at least one way of how to access them:
// The <div> DOM node?
// The <ul> DOM node?
// The second <li> (with Pete)?
document.queryselector('div');
document.queryselector('ul');
document.getElementsByTagName('li')[1];

// answer is The <div> DOM node?:
document.body.firstElementChild
// or
document.body.children[0]
// or (the first node is space, so we take 2nd)
document.body.childNodes[1]

// The <ul> DOM node?:
document.body.lastElementChild 
// or 
document.body.children[1]

// The second <li> (with Pete)?:
// get <ul>, and then get its last element child
document.body.lastElementChild.lastElementChild


// If elem – is an arbitrary DOM element node...
// .Is it true that elem.lastChild.nextSibling is always null ?
// .Is it true that elem.children[0].previousSibling is always null ?
YES,
YES // wrong, correct answer is NO. elem.children[0] is the first child among elements. But there may exist non-element nodes before it. previousSibling could be a text node.


// Write the code to paint all diagonal table cells in red.
// You’ll need to get all diagonal <td> from the <table> and paint them using the code:
// https://plnkr.co/edit/nuNlB97squ4Hgwrg?p=preview&preview
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}
