import { Router,Request,Response } from "express";
import * as groupController from '../controllers/groupController'


const groupRouter:Router = Router()

groupRouter.get('/',async(req:Request ,res:Response)=>
{
await groupController.getAllGroup(req, res)
})


export default groupRouter;