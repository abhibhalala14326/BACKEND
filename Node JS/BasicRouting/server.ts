import express ,{Application , Request , Response} from 'express'
import userRouter from './routes/userRouter.js';

const hostname:string = '127.0.0.1';
const port : number =  9999;

const app:Application = express()

app.get('/', (request:Request , response:Response) =>
{
    response.status(200).json({msg:" Hello "});

})
app.use('/api/users', userRouter)
app.listen(port,hostname , () =>
{
    console.log(`Express server is started at http://${hostname}:${port}`);
    
})