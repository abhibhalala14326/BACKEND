import { Router,Request,Response } from "express";
import * as groupController from '../controllers/groupController'
import { body } from "express-validator";


const groupRouter:Router = Router()

groupRouter.get('/',async(req:Request ,res:Response)=>
{
await groupController.getAllGroup(req, res)
})


groupRouter.post('/' ,[body('name').not().isEmpty().withMessage('naem is required')],
async(req:Request ,res:Response) =>
{
await groupController.createGroup(req , res)
} )


export default groupRouter;