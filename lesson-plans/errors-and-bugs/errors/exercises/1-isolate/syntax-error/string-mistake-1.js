

'use strict';

console.log('--- in execution phase ---');



/*
  environment: Chrome

  name: SyntaxError
  message: SyntaxError: Failed to execute 'appendChild' on 'Node': Invalid or unexpected token

  location: line 24

  life cycle: Execution

  the mistake: Line break

  the fix(es): Unbreak the line
*/

const a = 'this is two lines';


