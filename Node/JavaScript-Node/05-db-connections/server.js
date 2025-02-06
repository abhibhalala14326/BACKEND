import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config({path:'./.env'})

const port = process.env.PORT || 9999;
const hostname = '127.0.0.1';
const dbUrl = process.env.MONGO_DB_CLOUD_URL;
const dbname = process.env.MONGO_DB_DATABASE;


mongoose.connect(dbUrl ,{dbName:dbname})
.then(() => console.log("Database connection is ready"))
.catch((err) => console.error(" Error:", err));


const app = express()

app.listen(port,()=>
{
    console.log(`http://${hostname}:${port}`);
    
})