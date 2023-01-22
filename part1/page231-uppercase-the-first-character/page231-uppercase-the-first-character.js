// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
// ucFirst("john") == "John";
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

// Write a function that returns true if str contains ‘viagra’ or ‘XXX’, otherwise .
// The function must be case-insensitive:
function checkSpam(str) {
  // missing lowerCase:
  let lowerStr = str.toLowerCase();
  return str.includes('viagra') || str.includes('XXX') ? true : false; //correct is return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// Create a function exceeds
// length equal to
// that checks the length of the str and, if it – replaces the end of str with the ellipsis character "..." , to make its
// truncate(str, maxlength)
// maxlength
// .
// The result of the function should be the truncated (if needed) string.
// maxlength
// For instance:
// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te..."
// truncate("Hi everyone!", 20) = "Hi everyone!"
function truncate(str, maxlength) {
   return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '...' : str;
}

// We have a cost in the form "$120" . That is: the dollar sign goes first, and then the number. Create a function extractCurrencyValue(str) that would extract the numeric value from
// such string and return it. The example:
alert( extractCurrencyValue('$120') === 120 ); // true
function extractCurrencyValue(string) {
  return string.substring(1); //string.slice(1);
}
