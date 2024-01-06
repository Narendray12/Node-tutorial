var i=0;
setInterval(()=>{
    console.log('Hello %d',i)
    i++
},2000)
console.log("this log will never execute")