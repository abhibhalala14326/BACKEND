import express,{Router , Request,Response} from 'express'
import * as groupController from '../controllers/groupController'

const groupRouter:Router = Router()


groupRouter.get('/' , async(req:Request , res:Response)=>
{
 await groupController.getAllGroupp(req,res)
})

groupRouter.post('/', async (req: Request, res: Response) => {
    await groupController.createGroup(req, res)
})


groupRouter.get('/:groupId', async (req: Request, res: Response) => {
    await groupController.getGroupp(req, res)
})




export default groupRouter;