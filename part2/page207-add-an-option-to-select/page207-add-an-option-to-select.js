// <select id="genres">
//  <option value="rock">Rock</option>
//  <option value="blues" selected>Blues</option>
// </select>
// Use JavaScript to:
// 1. Show the value and the text of the selected option.
// 2. Add an option: <option value="classic">Classic</option> .
// 3. Make it selected.
let option = genres.options[genres.selectedIndex];
alert( option.value );

let newOption = new Option("Classic", "classic");
genres.append(newOption);

newOption.selected = true;
