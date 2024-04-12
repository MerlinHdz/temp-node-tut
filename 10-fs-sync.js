const { readFileSync, writeFileSync } = require('fs');
// same as const fs = require('fs'); fs.readFileSync

// fs for filesystem

console.log("start");

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result ${first}, ${second}\n`,
    { flag: 'a'} // flag a for append. By default it overwrites
)
console.log("done with this task");
console.log("starting the next one");