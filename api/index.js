import 'dotenv/config'


import express from 'express'
import cors from 'cors'

const server = express() 
server.use(cors());
server.use(express());

server.listen(process.env.PORT ,
    () => console.log(`API Online na porta ${process.env.PORT}`) )