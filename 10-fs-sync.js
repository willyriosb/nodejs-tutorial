// import { readFileSync, writeFileSync } from 'fs';

const { readFileSync, writeFileSync } = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

// If the file is not there, node will create it,
// otherwise it will overwrite it

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' } // create a new vale
);

console.log('done with this task');
console.log('starting the next one');
