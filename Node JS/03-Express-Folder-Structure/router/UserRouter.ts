import expres,{Router,Request,Response} from 'express'

// usage : get 
// url : http://127.0.0.1:9999/users
// method: Get

const Userrouter  = Router();

Userrouter.get('/home', (req:Request , res:Response) =>
{
res.json({
    msg:'userdata inset '
})
})

export default Userrouter;