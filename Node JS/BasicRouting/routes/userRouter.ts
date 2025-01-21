import express ,{Request ,Response,Router,Application} from 'express';

const userRouter:Router = Router();

userRouter.get('/home', (request:Request ,response:Response)=>
{
response.json({
    msg:'home'
})
});

userRouter.get("/home", (request: Request, response: Response) => {
  response.json({
    msg: "home",
  });
});

userRouter.post('/insertuser',(request:Request , response:Response)=>
{
response.json({
  msg:'INsert users data'
})
})


userRouter.post('/finedata',(request:Request , response:Response)=>
{
response.json({
  msg:'Fine data for users'
})
})

export default userRouter;