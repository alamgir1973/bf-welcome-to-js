

'use strict';

console.log('--- in execution phase ---');


/*
  environment: Chrome

  name: SyntaxError
  message: SyntaxError: Failed to execute 'appendChild' on 'Node': Invalid left-hand side in assignment

  location: Line 25

  life cycle: Creation

  the mistake: Variable should not be boolean

  the fix(es): Variable name change to 'isHappy'
*/

let isHappy = false;

isHappy = true;


