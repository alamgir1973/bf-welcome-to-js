'use strict';

let firstName = prompt('enter your First Naame:');
let lastName = prompt('Enter your Last Name:');

let greeting = '';
if (firstName === null && lastName === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + firstName + ' ' + lastName + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
