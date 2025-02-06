import express,{Request,Response,Application} from 'express'
import BooksRouter from './router/BooksRouter';
const hoostName:string = '127.0.0.1';

const port:number = 8888;

const app:Application = express();


app.use('/api/books' , BooksRouter)

app.listen(port,()=>{
    console.log(`http://${hoostName}:${port}`);
    
})