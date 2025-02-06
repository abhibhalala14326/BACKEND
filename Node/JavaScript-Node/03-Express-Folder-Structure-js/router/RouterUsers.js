import express from 'express'
import * as usersControllers from '../Comtrollers/usersControllers.js'


const userRouter = express.Router();

userRouter.get('/',async(req,res)=>
{
    await usersControllers.getuserControllers(req ,res)
})


export default userRouter;