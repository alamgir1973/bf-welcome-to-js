'use strict';

console.log('--- in execution phase ---');

/*
  environment: ReferenceError

  name: tomatoes
  message: Cannot access 'tomatoes' before initialization

  location: line 23

  life cycle: Execution

  the mistake: tomatoes variable is not declare before execution

  the fix(es):tomatoes variable declare before console.log()
*/

let tomatoes = 'fresh';

console.log(tomatoes);
