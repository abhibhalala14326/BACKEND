import express,{Request,Router,Response, Application} from 'express'
import UserRouter from './router/UseRouter';
const hostName : string = '127.0.0.7';
const port:number = 9999;

const app:Application = express();

app.use('/api/books',UserRouter)

app.listen(port,()=>
{
    console.log(`http://${hostName}:${port}`);
    
})