'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1
    line: 19
    why: strict equality
    trying: to put strict equality

*/

let input = prompt('enter something 5 characters long');

if (input == null) {
  alert(':(');
} else if (input.length < 5) {
  alert('too short');
} else if (input.length > 5) {
  alert('too long');
} else {
  alert('perfect');
}
