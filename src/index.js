// import mongoose from 'mongoose';
// import {DB_NAME} from "./constants"
// import express from "express"

import dotenv from "dotenv"
import connectDB from './db/dbindex.js'

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    application.listen(process.env.PORT,()=>{
        console.log("server is running on PORT:",process.env.PORT)
    })
})
.catch((err)=>{
    console.log(`MongoDB connection failed ${err}`)
})























/*
const app=express()
(async()=>{                              //immediate invoke func
    try{
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
app.on("error",(error)=>{
    console.log('error',error)
    throw error
})

app.listen(process.env.PORT,()=>{
    console.log(`express is running on port ${process.env.PORT}`)
})
    }catch(error){
        console.error(`error:${error}`)
        throw error
    }
})()     
    */