import mongoose from "mongoose";
import dotenv from 'dotenv'
import express,{ Application } from "express";

const app:Application= express()
const hostName:string = '127.0.0.1';
const port:number | string | undefined= process.env.PORT || 9977;
const dbname: string | undefined = process.env.DB_DATABASR_NAME;
const dbUrl: any = process.env.DB_CLOUD_URL;

if (port) {
    app.listen(port, ()=>
    {
        if (dbUrl && dbname) {
            mongoose.connect(dbUrl ,{dbName:dbname}).then(()=>{
                console.log('dataBase conect');
                
            }).catch((error)=>
            {
                console.error(error);
                process.exit(0)
                
            })
        }
        console.log(`http://${hostName}:${port}`);
        
    })
    
}