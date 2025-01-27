import express from 'express'

const userRouter = express.Router();

userRouter.get('/',(req,res)=>
{
res.json({
    msg:'home page'
})
})


export default userRouter;