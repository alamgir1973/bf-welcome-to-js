'use strict';

console.log('--- in execution phase ---');

/*
  environment: ReferenceError

  name: isValidUserName
  message: Cannot access 'isValidUserName' before initialization

  location: line 29

  life cycle: Execution

  the mistake: isValidaUserName is not declare

  the fix(es): isValidaUserName declare at line no 23 and remove from line 29
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;
}

// let isValidUserName;

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
