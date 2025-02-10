'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

let a = 'y'; //Declare a, initialize a
let b = 'x'; //Declare b, initialize b
let t = ''; //Declare t, initialize t

console.log(a, b, t); // Read t blank string, read b as 'x', read a as 'x' and call log as 'y x  '.

t = a; //Read a and assign t
a = b; //Read b and assign a
b = t; //Read t and assign b

console.log(a, b, t); // Read t as 'y', read b as 'y', read a as 'x' and call log as 'x y y'.

// what did you do in this program?
// what are the final values of `a` and `b`?
// Ans: a's value is x and b's value is y
// how are they changed from the initial values

// is it possible to swap a and b without using t?
/*
No, not possible. If we do like that
a = b;
b = a;
console.log(a, b); then output will be x, x.
 */
