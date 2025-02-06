import express,{Request,Response,Router} from 'express'
import { IBook } from '../models/Ibooks';
import path from 'path';

const UserRouter:Router = Router();

UserRouter.get('/',(req:Request , res:Response)=>
{
const jsonfile = require("jsonfile");
const booksJsonPath = path.join(__dirname, "..", "db", "books.json");

jsonfile.readFile(booksJsonPath, function (err: string, obj: IBook) {
  if (err) console.error(err);
//   console.dir(obj);
res.json(obj);

});
})

export default UserRouter; 