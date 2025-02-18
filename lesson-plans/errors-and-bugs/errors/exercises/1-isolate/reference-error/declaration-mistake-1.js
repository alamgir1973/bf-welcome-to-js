'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: ReferenceError
  message: ReferenceError: welf is not defined

  location: line 20

  life cycle: Execution

  the mistake: variable 'welf' is declared

  the fix(es): Declared with keyword 'let'
*/

let welf = 'ingrad';

console.log(welf);
