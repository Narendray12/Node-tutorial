const eventEmitter = require('events')
const customEmiitter = new eventEmitter()
customEmiitter.on('response',(name,id)=>{
    console.log(`this is first ON with ${name}, ${id}`)
})
customEmiitter.on('response',()=>{
    console.log("this is second ON")
})

customEmiitter.emit('response','narendra',21)