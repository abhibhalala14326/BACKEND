import express from "express";

const userRouter = express.Router();


// http://127.0.0.1:9999/api/users/home
userRouter.get('/home', (req,res)=>
{
res.json({
    msg:'home'
})
})


// http://127.0.0.1:9999/api/users/insertusers
userRouter.post('/insertusers',(req,res) =>
{
res.json({
    msg:'insert data for users'
})
});

// http://127.0.0.1:9999/api/users/finedata
userRouter.get('/finedata', (req,res)=>
{
    res.json({
        msg:'find for users data '
    })
})


export default userRouter;