// Write the code to select the element with data-widget-name attribute from the document and to read its value.
// <!DOCTYPE html>
// <html>
// <body>
//   <div data-widget-name="menu">Choose the genre</div>
//   <script>
//   /* your code */
//   </script>
// </body>
// </html>
let el = document.querySelector('[data-widget-name]');
console.log(el.getAttribute('data-widget-name'));

// Make all external links orange by altering their style property.
// A link is external if:
// Its href has :// in it
// But doesn’t start with http://internal.com .
// Example:
// <a name="list">the list</a> <ul>
//   <li><a href="http://google.com">http://google.com</a></li>
//   <li><a href="/tutorial">/tutorial.html</a></li>
//   <li><a href="local/path">local/path</a></li>
//   <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
//   <li><a href="http://nodejs.org">http://nodejs.org</a></li>
//   <li><a href="http://internal.com/test">http://internal.com/test</a></li>
//   </ul>
// <script>
//   // setting style for a single link
//   let link = document.querySelector('a'); 
//   link.style.color = 'orange';
// </script>
let links = document.querySelectorAll('a');
for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue;
  if (!href.includes('://')) continue;
  if (href.startsWith('http://internal.com')) continue;
  link.style.color = 'orange';
}

// a good answer is using css seleltor :
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(selector);
links.forEach(link => link.style.color = 'orange');
