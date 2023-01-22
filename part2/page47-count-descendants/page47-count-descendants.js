// There’s a tree structured as nested ul/li 
// Write the code that for each <li> shows:
// 1. What’s the text inside it (without the subtree)
// 2. The number of nested <li> – all descendants, including the deeply nested ones.
// https://plnkr.co/edit/KQWTwzSfogX1OLJV?p=preview&preview
let el = document.querySelectorAll('li');

document.getElementsByTagName('li').length;
//wrong
el.forEach(el => {
  console.log(el.innerHTML);
})
// correct answer is :
for (let li of document.querySelectorAll('li')) {
  console.log(li.firstChild.data);
}

// What does the script show?
// <html>
//   <body>
//     <script>
//       alert(document.body.lastChild.nodeType);
//     </script>
//   </body>
// </html>
1 // the browser did not process the rest of the page yet.

// What does this code show?
// <script>
//   let body = document.body;
//   body.innerHTML = "<!--" + body.tagName + "-->";
//   alert( body.firstChild.data ); // what's here?
// </script>
body // wrong, correct is BODY,  is always uppercase in HTML.


// Which class does the document belong to?
// What’s its place in the DOM hierarchy?
// Does it inherit from Node or Element , or maybe HTMLElement ?
HTMLDocument,
// didn't answer, the correct answer is
alert(HTMLDocument.prototype.constructor.name); // HTMLDocument 
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document 
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
