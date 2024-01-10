const {createReadStream} = require('fs')
const { result } = require('lodash')

const stream = createReadStream('./content/file-for-streams.txt',{highWaterMark:9000},{endcoding : 'utf8'})

//by default the size of a single stream is 64 bytes
//last buffer - remainder
// highWaterMark - control the size of stream
// const stream = createReadStream('./content/file-for-streams.txt', {highWaterMark:9000})
// const stream = createReadStream('./content/file-for-streams.txt',{endcoding : utf8})


stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
})