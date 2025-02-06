import express, { Request, Response, Application,Router } from "express";
import { IUser } from "../models/IUers";
import path from "path";

const UserRouter:Router = Router();

UserRouter.get('/',(req:Request , res:Response)=>
{
const jsonfile = require("jsonfile");
const usersJsonPath = path.join(__dirname, "..", "db", "users.json");
// const file = 'D:\BACKEND\Node JS\04-Express-json-without-mvc\db\users.json'
jsonfile.readFile(usersJsonPath, function (err: string, obj: IUser) {
  if (err) console.error(err);
//   console.dir(obj);
res.json(obj)
});
})




export default UserRouter