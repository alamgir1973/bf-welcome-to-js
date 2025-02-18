

'use strict';

console.log('--- in execution phase ---');



/*
  environment: Chrome

  name: SyntaxError
  message: SyntaxError: Failed to execute 'appendChild' on 'Node': Unexpected number

  location: Line 25

  life cycle: Creation

  the mistake: Variable name not should be number

  the fix(es): add variable name 'numThree'
*/


const numThree = 'three';


