const path = require('path')
const fs = require('fs')
const {EventEmitter} = require('events')
const os = require('os')

// ================================================== Question 1 ============================================================ 

// const currentFileAndDirectory = (filePath,dirPath)=>{
//     console.log(filePath);
//     console.log(dirPath);
// }
// currentFileAndDirectory(__filename , __dirname)

// ================================================== Question 2 ============================================================ 

// const fileName = (filePath)=>{
//     console.log(path.basename(filePath));
// }
// fileName(__filename)

// ================================================== Question 3 ============================================================ 

// const buildPath = (fileObj)=>{
//     console.log(path.format(fileObj));
// }
// buildPath(path.parse(__filename))

// ================================================== Question 4 ============================================================ 

// const extension = (filePath)=>{
//     console.log(path.extname(filePath));
// }
// extension(__filename)

// ================================================== Question 5 ============================================================ 

// const returnNameAndExtension = (filePath)=>{
//     const {name , ext} = path.parse(filePath)
//     console.log({name , ext});
// }
// returnNameAndExtension(__filename)

// ================================================== Question 6 ============================================================ 

// const isAbsolute = (filePath)=>{
//     console.log(path.isAbsolute(filePath));
// }
// isAbsolute(__filename)

// ================================================== Question 7 ============================================================ 

// const join = (...args)=>{
//     let newPath = ""
//     let count = 0

//     for (const element of args) {
//         console.log(count);
        
//         if(count === (args.length-1)){
//             newPath+=path.join(element)
//         }else{
//             count+=1
//             newPath+=path.join(element,'/')
//         }
        
//         console.log(newPath);
//     }
// }
// join("src" , "component" , "App.js")

// ================================================== Question 8 ============================================================ 

// const resolvePath = (relativePath)=>{
//     absolutePath = path.resolve(relativePath)
//     console.log(absolutePath);
// }
// resolvePath("./index.js")

// ================================================== Question 9 ============================================================ 

// const joinPaths = (path1 , path2)=>{
//     console.log(path.join(path1,path2));
// }
// joinPaths('/folder1' , 'folder2/file.txt')

// ================================================== Question 10 ============================================================ 

// const deleteFile = (fileName)=>{
//     let file = path.resolve(fileName)
//     fs.unlink(file , ()=>{
//         console.log(`The ${path.basename(file)} is deleted`);
        
//     })
// }
// deleteFile('main.txt')

// ================================================== Question 11 ============================================================ 

// const createFolder = (folderName)=>{
//     fs.mkdirSync(folderName , {recursive : true})
//     console.log('Success');
    
// }
// createFolder('C:/Users/Windows10/Desktop/Route/Route Assignments Solved/test')

// ================================================== Question 12 ============================================================

// let event = new EventEmitter()

// register
// event.on('start' , ()=>{
//     console.log('Welcome Event Triggered!');
// })

//trigger
// event.emit('start')

// ================================================== Question 13 ============================================================ 

// let event = new EventEmitter()
// let userName = "Ahmed"

// register
// event.once('login' , (userName)=>{
//     console.log(`User logged in: ${userName}`);
// })

// trigger
// event.emit('login' , userName)

// ================================================== Question 14 ============================================================

// const syncFile = fs.readFileSync('./notes.txt' , 'utf-8')
// console.log(syncFile);

// ================================================== Question 15 ============================================================

// const writeAsyncFile = (path , content)=>{
//     fs.writeFile(path , content , (err)=>{
//         if(err){
//             console.log("Error writing file......" , err);
//         }else{
//             console.log("File Saved Successfully!");
            
//         }
//     })
// }
// writeAsyncFile('./async.txt' , 'Async Save')

// ================================================== Question 16 ============================================================

// const checkDir = fs.existsSync('./notes.txt')
// console.log(checkDir);

// ================================================== Question 17 ============================================================

// const osPlatformAndArch = (platform , arch)=>{
//     console.log({platform , arch});    
// }
// osPlatformAndArch(os.platform() , os.arch())


