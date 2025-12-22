const {createReadStream , createWriteStream} = require('fs')
const {resolve} = require('path')
const {createGzip} = require('zlib')
const gzip = createGzip()
const http = require('http')
const fs = require('fs')
const readFileFromPath = resolve('./big.txt')
const writeFileToPath = resolve('./dest.txt')
const writeFileComprsessedToPath = resolve('./dest.txt.gz')
// =============================================== Question 1 ===================================================

// const readFileStream = createReadStream(readFileFromPath , {encoding : 'utf-8'})
// readFileStream.on('data' , (chunk)=>{
//     console.log({chunk});
// })

// =============================================== Question 2 ===================================================

// const writeFileStream =  createWriteStream(writeFileToPath)
// const readFileStream = createReadStream(readFileFromPath , {encoding : 'utf-8'})

// readFileStream.pipe(writeFileStream)
// writeFileStream.on('finish' , ()=>{
//     console.log('File copied using streams');
// })

// =============================================== Question 3 ===================================================

// const writeFileStream =  createWriteStream(writeFileComprsessedToPath)
// const readFileStream = createReadStream(readFileFromPath , {encoding : 'utf-8'})

// readFileStream.pipe(gzip).pipe(writeFileStream)

// =============================================== Question 4 ===================================================

const usersPath = resolve('./users.json')
let users =JSON.parse(fs.readFileSync(usersPath)) 


const port = 3000
const server = http.createServer((req,res)=>{
    const {method , url} = req

    // Get All Users
    if(method === "GET" && url=='/user'){
        res.writeHead(200 , {
            "content-type" : 'application/json'
        })
        res.write(JSON.stringify(users))
        return res.end()
    }

    // Get user by id
    else if(method === 'GET' && url.startsWith('/user/')){
        const id =Number(url.split('/')[2])
        
        let user = users.find((user)=>{
            if(user.id===id){
                return user
            }
        })
        console.log(user);
        
        if(!user){
            res.writeHead(404,{"content-type":'application/json'})
            return res.end(JSON.stringify({message:'User Not Found'}))
        }
        res.writeHead(200 , {"content-type":'application/json'})
        return res.end(JSON.stringify(user))
    }

    // Add User
    else if(method === 'POST' && url=='/user'){
        let data = ''
        req.on('data' , (chunk)=>{
            data+=chunk
        })
        req.on('end',()=>{
            const newUser = JSON.parse(data)
            users.push(newUser)
            fs.writeFileSync(usersPath , JSON.stringify(users) )
            res.writeHead(201,{"content-type":'application/json'})
            res.write(JSON.stringify(newUser))
            return res.end()
        })
    }

    // Update User By id
    else if(method==='PATCH' && url.startsWith('/user/')){
        const id =Number(url.split('/')[2])
        let data = ''
        req.on('data' , (chunk)=>{
            data+=chunk
        })
        req.on('end' , ()=>{
            let {email , name , age} = JSON.parse(data)
            let userData = users.find((user)=>{
                if(user.id === id){
                    return user
                }
            })
            if(userData===-1){
                res.writeHead(404 , {"content-type":'application/json'})
                return res.end(JSON.stringify({message:'User Not Found'}))    
            }
            else{
                userData.age = age
                userData.name = name
                userData.email = email

                fs.writeFileSync(usersPath , JSON.stringify(users))
                res.writeHead(200 , {"content-type":'application/json'})
                return res.end(JSON.stringify({message : 'user updated successfully'}))
            }
        })
    }

    // Delete User by id

    else if(method === 'DELETE' && url.startsWith('/user/')){
        const id = Number(url.split('/')[2])
        
            let userIndex = users.findIndex((user)=>{
                if(user.id === id){
                    return user
                }
            })            
            if(userIndex === -1){
                res.writeHead(404 , JSON.stringify({message : "User Not Found"}))
                return res.end()
            }
            if(userIndex !== -1){
                users.splice(userIndex , 1)
                fs.writeFileSync(usersPath , JSON.stringify(users))
                res.writeHead(200 , {"content-type" : 'application/json'})
                return res.end(JSON.stringify({message : 'User Deleted Successfully'}))
            }            
    }

})

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})