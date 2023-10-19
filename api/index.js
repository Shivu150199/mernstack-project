import express  from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose'

import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
const app=express()
app.use(express.json());
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongodb')
}).catch((err)=>{
    console.log(err)
})


app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)








app.listen(3000,()=>{
    console.log('server is running on port 3000')
})