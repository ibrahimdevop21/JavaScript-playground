#!/usr/bin/env node

//fetch anem from command argument, or enviroment, or fallback
const nameArg = capitalize(process.argv[2] || process.env.USER || process.env.USERNAME ||'word');

//output message
console.log(`Hello, ${nameArg}`);

//capitalize the first letter of all words
function capitalize(str) {
  return str
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

}
