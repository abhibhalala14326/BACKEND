import { Router , Request , Response } from "express";
import * as User from '../controllers/userConrtoller'


const userRouter:Router = Router()

// Get All User
userRouter.get('/', async (req: Request, res: Response) => {
    await User.getAllUser(req, res)
})

// Get a User
userRouter.get('/:id', async (req: Request, res: Response) => {
    await User.getUser(req, res)
})


// Create a User

userRouter.post("/", async (req: Request, res: Response) => {
    await User.createUser(req, res)
})

// Update a User

userRouter.put('/:id', async (req: Request, res: Response) => {
    await User.UpdateUser(req, res)
})


//  Delele a User

userRouter.delete("/:id" , async (req: Request , res:Response)=>
{
    await User.DeleteUser(req,res)
} )


export default userRouter;
