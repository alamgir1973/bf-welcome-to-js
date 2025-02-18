// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: Chrome

  name:SyntaxError
  message: SyntaxError: Unexpected token '+'

  location: Line 32

  life cycle: Execution

  the mistake: Added + replace of =

  the fix(es): Removed + and replace =
*/

whenFormDataChanges('user-data', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let text = readString('to-double');

  // --- repeat the text ---

  let repeated = text + '\n' + text;

  // --- display the repeated text ---

  displayString('doubled-input', repeated);
});
