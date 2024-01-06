const {readFileSync, writeFileSync}= require('fs');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync('./content/third.txt',`Here is the final File : ${first},${second}`,{flag: 'a'});