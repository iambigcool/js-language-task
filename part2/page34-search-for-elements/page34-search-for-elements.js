// Here’s the document with the table and form.
// How to find?...
// 1. The table with id="age-table" .
// 2. All label elements inside that table (there should be 3 of them). 3. The first td in that table (with the word “Age”).
// 4. The form with name="search" .
// 5. The first input in that form.
// 6. The last input in that form.
// Open the page https://javascript.info/task/find-elements/table.html in a separate window and make use of browser tools for that.
let table = document.querySelector('#age-table');

document.querySelectorAll('#age-table label'); // another answer table.getElementsByTagName('label')

table.querySelector('td'); // another answer table.rows[0].cells[0] or table.getElementsByTagName('td')[0]

let form = document.querySelector('form[name="search"]'); // another answer document.getElementsByName('search')[0]

form.querySelector('input') // another answer form.getElementsByTagName('input')[0]

form.getElementsByTagName('input').lastChild;
// answer:
let inputs = form.querySelectorAll('input') // find all inputs
inputs[inputs.length-1] // take the last one
