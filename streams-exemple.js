const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    const fileData = fs.readFileSync('./content/file-for-streams.txt','utf8')
    res.end(fileData)
}).listen(5000)