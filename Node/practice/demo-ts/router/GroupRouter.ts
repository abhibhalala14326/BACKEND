import { Request, Response, Router } from "express";
import * as controllers from '../controllers/groupController'



const GroupRouter:Router = Router();

GroupRouter.get('/',async(req:Request , res:Response)=>
{
await controllers.getAllGroup(req,res)
})



export default GroupRouter;