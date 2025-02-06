import express, { Request, Response, Application,Router } from "express";
import * as booksController from '../controller/booksController'
import { log } from "console";
const BooksRouter:Router = Router()

BooksRouter.get('/',async(req:Request , res:Response)=>
{
console.log('inside Router');
await booksController.getAllBooks(req , res)
    
})

export default BooksRouter
