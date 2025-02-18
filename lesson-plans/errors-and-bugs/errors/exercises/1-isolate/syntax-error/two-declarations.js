'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: SyntaxError
  message: SyntaxError: Failed to execute 'appendChild' on 'Node': Identifier 'tree' has already been declared

  location: line 22

  life cycle: Execution

  the mistake: line 22 declared tree varaiable

  the fix(es): Remove 'let' and intialize
*/

let tree = 'oak';

tree = 'birch';
