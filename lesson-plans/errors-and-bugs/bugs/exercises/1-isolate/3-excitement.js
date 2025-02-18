'use strict';

/*
  test cases:
    '' -> ''
    'a' -> 'a!'
    'hello' -> 'h!e!l!l!o!'
    ':)' -> ':!)!'


  experiment 1
    line: 25
    why: reading 'excited' variable is missing
    trying: add 'excited' before character variable at line 25

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be excited');
}

let excited = '';
for (const character of text) {
  excited = excited + character + '!';
}

alert(excited);
