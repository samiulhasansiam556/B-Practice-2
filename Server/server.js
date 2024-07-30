import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";


const server = express();
server.use(bodyParser.json())
server.use(cors());
dotenv.config();


const PORT = process.env.PORT || 4000;
const URL = process.env.MONGOURL;

mongoose.connect(URL)
.then(()=>{
    console.log("Connected to MongoDB");

    server.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
})
.catch(error=> console.error(error));



server.use("/user",userRoute);




