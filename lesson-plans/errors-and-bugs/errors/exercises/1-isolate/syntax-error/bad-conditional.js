

'use strict';

console.log('--- in execution phase ---');


/*
  environment: Chrome

  name: SyntaxError
  message: SyntaxError: Failed to execute 'appendChild' on 'Node': Unexpected token '{'

  location: line 27

  life cycle: Execution

  the mistake: missing 'if' with else

  the fix(es): add 'if' with 'else' line 27
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


