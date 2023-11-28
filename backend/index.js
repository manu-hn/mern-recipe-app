const express = require('express');
const {StatusCodes : {ACCEPTED, BAD_GATEWAY}} = require('http-status-codes')
const cors = require('cors');
require('dotenv').config();
require('./src/connection/DataBaseConnect.js');

const UserRoutes=require('./src/routes/User.routes.js')

const app=express();

app.use(express.json());
app.use(cors());

app.use('/api/recipe', UserRoutes)

app.use("*",(request, response, next)=>{
    response.status(BAD_GATEWAY).json({error : true, message : `No Page Found`})
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})