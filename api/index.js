import express  from "express";
import dotenv from 'dotenv';
import connection  from "./config/db.js";

import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
const app=express();
app.use(express.json());
dotenv.config();




app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)


app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||'internal server error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})





app.listen(3000,async()=>{
    await connection;
    console.log('server is running on port 3000')
})