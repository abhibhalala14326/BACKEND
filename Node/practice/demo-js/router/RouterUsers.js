import express from 'express'
import * as userController from '../Comtrollers/userController.js'


const userRouter = express.Router();

userRouter.get('/',async(req,res)=>
{
    await userController.getAllUersData(req,res)
})


export default userRouter;