const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('This is homepage');
    }
    if (req.url==='/about') {
        res.end("this is about page");
    }
    res.end(`
    <h1>OPPS</h1>
    <p>This page doesn't exist</p>
    <a href='/'> RELOAD</a>`)
})

server.listen(5000)