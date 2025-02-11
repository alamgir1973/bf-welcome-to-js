'use strict';

let input = null;
while (input === null || input.length !== 10) {
  input = prompt('enter something with 10 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);

let firstPart = null;
let secondPart = null;

while (firstPart !== 'every') {
  firstPart = prompt('Enter "every"');
}

while (secondPart !== 'thing') {
  secondPart = prompt('Enter "thing');
}

alert(firstPart + secondPart);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
