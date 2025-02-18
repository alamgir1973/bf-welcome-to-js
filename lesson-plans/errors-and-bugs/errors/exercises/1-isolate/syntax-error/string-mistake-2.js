

'use strict';

console.log('--- in execution phase ---');


/*
  environment: Chrome

  name: SyntaxError
  message: SyntaxError: Failed to execute 'appendChild' on 'Node': Unexpected string

  location : line 23

  life cycle: Execution

  the mistake: It is single quote

  the fix(es): Replace double quote
*/

const quotesInQuotes = "remind yourself ''i can do this!'' at least once a day";


