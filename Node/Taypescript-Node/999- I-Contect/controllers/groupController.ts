import { Request ,Response } from "express";
import { IGrupe } from "../model/IGroup";
import groupTables from "../DataBase/GrupeShema";


export const getAllGroup = async(req:Request , res:Response) =>
{
    try {
        let group : IGrupe[] | undefined = await groupTables.find();
        if (group) {
            return res.json(group)
        }
    } catch (error) {
        return res.json({ 'msg': 'Data is Not Found' });

    }
}