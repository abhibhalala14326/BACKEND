import express, { Request, Response, Application,Router } from "express";
import * as productControllers from '../controllers/ProductControllers'


const productRouter:Router= Router();

productRouter.get('/' ,async (req:Request , res:Response)=>
{
await productControllers.getAllProductControllers(req,res)
})


export default productRouter;