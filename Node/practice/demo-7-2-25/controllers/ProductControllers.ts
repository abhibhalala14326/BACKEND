import { Request, Response } from "express";
import { IProduct } from "../models/IProduct"
import { productUtils } from "../utils/productUtils"



export const getAllProductControllers = async(req:Request , res:Response)=>
{
    try {
        let productData: IProduct[] = await productUtils.getAllProduct();
        return res.json(productData) 
    } catch {
        return res.json({msg:'server  error'})
    }
   
}