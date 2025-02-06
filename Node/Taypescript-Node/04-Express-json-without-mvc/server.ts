import express,{Request,Response,Application} from 'express'
import UserRouter from './router/UserRouter';

const hostname:string = '127.0.0.1';
const port : number = 8888;

const app:Application = express();


app.use('/users',UserRouter)

app.listen(port,()=>
{
    console.log(`http://${hostname}:${port}`);
    
})