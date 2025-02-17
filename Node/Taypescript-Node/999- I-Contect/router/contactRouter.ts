import { Router , Request , Response } from "express";
import * as contact from '../controllers/contatController'

const contactRouter:Router = Router()

contactRouter.get("/" , async(req:Request , res:Response)=>
{
  await contact.getAllContact(req,res)
})

contactRouter.get("/:id", async (req: Request, res: Response) => {
    await contact.getContact(req, res)
})

contactRouter.post("/" , async(req:Request , res:Response)=>
{
    await contact.createContact(req,res)
})

contactRouter.put("/:id" , async(req:Request, res:Response)=>
{
    await contact.updatedContact(req,res)
})

contactRouter.delete('/:id' , async(req:Request , res:Response)=>
{
    await contact.deleteContact(req,res)
})

export default contactRouter;
