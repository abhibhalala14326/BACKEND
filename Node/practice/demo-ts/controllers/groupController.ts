import { Request, Response } from "express";
import { IGroup } from "../models/IGroup";
import GroupTables from "../DataBase/GroupSchema";



export const getAllGroup = async(req:Request , res:Response)=>
    {
        try {
            let group:IGroup[] | undefined = await GroupTables.find();
            if (group) {
                return res.json(group)
            }
        } catch (error) {
            console.error(error);
        }
    } 