'use strict';

let a = 'Alamgir'; // Declare and initialize a as 'Alamgir'.
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

let b = 'Hello ' + a + ', your name is '; // Read a, declare b and initialized 'Hello Alamgir, your name is'.

if (a.length > 8) {
  // Read a, verify if the condition is true or false.
  b = b + 'long.'; // Read b and assign b.
} else if (a.length === 8) {
  // Read a verify if the condition is true or false.
  b = b + 'perfect.'; // Read b and assign b.
} else {
  b = b + 'short.'; //Read b and assign b.
}

console.log(b); // Read b and call log.
