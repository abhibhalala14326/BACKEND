import express,{Application,Request,Response} from "express";

const hostname:string = '127.0.0.1';

const port:number = 9999;

const app:Application = express()

app.get('/',(req:Request , res:Response)=>
{
res.json({
    msg:'Hello'
})
})


app.listen(port ,hostname, () =>
{
console.log(`http:${hostname}:${port}`);

})

