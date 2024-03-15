require('dotenv').config()
// import express
const express = require('express')
const cors = require('cors')

const LoginServer = express()
const router = require('./Routes/router')

require('./DB/connection')


LoginServer.use(cors())
LoginServer.use(express.json())
LoginServer.use(router)
 

const PORT = process.env.PORT || 4000;



LoginServer.listen(PORT,()=>{
    console.log(`LoginServer Server started at port :${PORT} and waiting for client request!!!!!`);
})


LoginServer.get('/',(req,res)=>{
    res.send('<h1>LoginServer server started and waiting for client request!!!!!</h1>')
})
