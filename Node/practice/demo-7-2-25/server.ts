import express,{Request,Response,Application}  from "express";
import productRouter from "./router/productRouter";

const port:number = 8899;
const hostName:string = '127.0.0.1';

const app:Application = express()

app.use('/api/product' , productRouter)

app.listen(port,()=>
{
    console.log(`http://${hostName}:${port}`);
    
})