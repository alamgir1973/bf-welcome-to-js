'use strict';

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let transformation = toReverse + ' -> ' + backwards;

alert(transformation);

backwards = '';
for (let nextChar of toReverse) {
  backwards = backwards + nextChar;
}

let rightOrder = toReverse + ' -> ' + backwards;

alert(rightOrder);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/
