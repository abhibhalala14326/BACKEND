import express  from 'express'
import * as groupController from '../Controller/groupController'

const groupRouter = express.Router()


groupRouter.get('/' , async(req, res)=>
{
    await groupController.getAllGroup(req,res)
})


export default groupRouter;