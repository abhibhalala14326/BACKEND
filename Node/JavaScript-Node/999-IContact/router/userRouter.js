import express from 'express'
import *  as  userController from '../Controller/userController.js'

const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    await userController.getAllUser(req, res)
})

userRouter.get('/:id', async (req, res) => {
    await userController.getUser(req, res)
})


userRouter.post("/" , async(req  ,res)=>
{
    await userController.createUser(req,res)
})

userRouter.put("/:id" , async(req ,res)=>
{
    await userController.UserUpdate(req,res)
})

userRouter.delete('/:id' ,async(req,res) =>{
    await userController.UserDelete(req,res)
})

export default userRouter;
