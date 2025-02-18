import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: Chrome

  name: SyntaxError
  message: SyntaxError: Invalid left-hand side expression in prefix operation

  location: Line 23

  life cycle: Creation

  the mistake: In console, it was not string value

  the fix(es): Put it string value
*/

whenFormDataChanges('input', () => {
  console.log('form data changed');

  // --- read the user's input ---

  let userText = readString('to-mirror');

  // --- mirror the text ---

  let mirrored = ' | ';
  for (let char of userText) {
    mirrored = char + mirrored + char;
  }

  // --- display the result ---

  displayString('output', mirrored);
});
