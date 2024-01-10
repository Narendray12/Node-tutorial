const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    // const fileData = fs.readFileSync('./content/file-for-streams.txt','utf8')
    // res.end(fileData)
    const filestream = fs.createReadStream('./content/file-for-streams.txt','utf8')
    filestream.on('open',()=>{
        filestream.pipe(res)
    })
    filestream.on('error',(err)=>{res.end(err)})
}
).listen(5000)