import express from 'express'
import BooksRouter from './router/BooksRouter.js';

const hostname = '127.0.0.7'

const port = 9999;

const app = express();

app.use('/api/books' ,BooksRouter)

app.listen(port , ()=>
{
console.log(`http://${hostname}:${port}`);

})