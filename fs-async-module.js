const { log } = require('console');
const {readFile, writeFile}= require('fs');

readFile('./content/first.txt',(err,result)=>{
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt',(err,result)=>{
        if (err) {
            console.log(err)
            return;
        }
        const second = result;
        writeFile('./content/third.txt',`This is final result : ${first},${second}`,{flag:'a'},(err,result)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    })
})