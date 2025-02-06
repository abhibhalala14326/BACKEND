import express from 'express'
import userRouter from './router/RouterUsers.js';

const hostname = '127.0.0.1';
const port = 9999;

const app = express()

app.get('/',(req,res)=>
{
res.json({
    msg:'Hello World'
})
})


app.use('/api/users',userRouter)

app.listen(port,()=>
{
    console.log(`http://${hostname}:${port}`);
    
})