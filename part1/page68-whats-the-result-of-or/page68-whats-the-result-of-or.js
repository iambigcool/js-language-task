// What is the code below going to output?
// alert( null || 2 || undefined );
2

// alert( alert(1) || 2 || alert(3) );
1

// alert( 1 && null && 2 );
null

// alert( alert(1) && alert(2) );
2 // done wrong, correct is 1 because first alert(1) stop then undefined.

// alert( null || 2 && 3 || 4 );
3

// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90 .
if (age>=14 && age<=90){}

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT ! , the second one – without it.
if (age < 14 || age > 90) {};
if (!(age>=14 && age<=90)) {};

// Which of these alert s are going to execute?
// What will the results of the expressions be inside if(...) ?
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
-1 first,
0, 
1, third

// Write the code which asks for a login with prompt .
// If the visitor enters "Admin" , then prompt for a password, if the input is an empty line or Esc
// – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
function CheckLogin() {
  let input;
  if (input === 'Admin') {
    let password = prompt('Whats ur password?');
    if (password === 'TheMaster') {
      alert('Welcome!');
    } else if (password === '' || password == null) { // password == null wrong should be '==='
      alert('Canceled');
    } else {
      alert('Wrong password');
    }
  } else if (password === '' || password == null) { // password == null wrong should be '==='
    alert('Canceled');
  } else {
      alert('Wrong password');
  }
}
