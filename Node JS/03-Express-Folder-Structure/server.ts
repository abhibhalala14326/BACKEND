import express,{Application,Request,Response} from "express";
import Userrouter from "./router/UserRouter";

const hostname:string = '127.0.0.1';

const port:number = 9999;

const app:Application = express()
        console.log("dirname:", __dirname);

app.get('/',(req:Request , res:Response)=>
{
res.json({
    msg:'Hello'
})
})

app.use('/api/abhi',Userrouter)

app.listen(port ,hostname, () =>
{
console.log(`http://${hostname}:${port}`);

})

