//first approach - creating promise by yourself and then use it 

const {readFile, writeFile} = require('fs').promises
// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if (err) {
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async()=>{
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(`Text in first and second file is ${first},${second}`)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()

//second approach -  using util module which is used to use promises without writing everything like above 

// const util = require('util')
// const TextReadFile = util.promisify(readFile)
// const TextWriteFile = util.promisify(writeFile)


// const start1 = async()=>{
//     try {
//         const first = await TextReadFile('./content/first.txt','utf8')
//         const second = await TextReadFile('./content/second.txt','utf8')
//         await TextWriteFile('./content/result-file.txt',`Text in first and second file is ${first},${second}`)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start1()

//third approach - by using the promises directly with the require (refer to line number 3)


const start2 = async()=>{
    try {
        const first = await readFile('./content/first.txt')
        const second = await readFile('./content/second.txt')
        await writeFile('./content/result-file.txt',`Text in first and second file is ${first},${second}`,
        {flag:'a'})
    } catch (error) {
        console.log(error)
    }
}

start2()
