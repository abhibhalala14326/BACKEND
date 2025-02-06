import { Request, Response } from "express";
import { IBook } from "../models/Ibooks";
import { BooksUtils } from "../util/BooksUtils";



export const getBooks = async(req:Request , res:Response)=>
{
    try {
         let booksdata: IBook[] = await BooksUtils.getAllBooksDb();
         return res.status(200).json(booksdata); 
    } catch (error) {
       res.status(500).json({msg:'server error'}) 
    }
  
}