'use strict';

/*
  test cases:
    null -> (do not exit the loop)
    '' -> (do not exit the loop)
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line: 22
    why: inside the loop declare 'const' input
    trying: remove 'const' from input variable

*/

let message = '';

let input = null;
while (input === null || input.length === 0) {
  input = prompt('enter something');

  message = 'you entered "' + input + '"';
}

alert(message);
