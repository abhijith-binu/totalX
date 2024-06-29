
//  load .env contents to process.env

require ('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')

require('./db/connection')

const server = express()
// get port dyamically while diploying
const PORT = 4000|| process.env.PORT

server.use(cors())
server.use(express.json())
server.use(router)



server.listen(PORT,()=>{
    console.log(` portal server run at the port ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send('server started')
})