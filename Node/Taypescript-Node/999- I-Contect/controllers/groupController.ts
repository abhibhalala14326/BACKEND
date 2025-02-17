import { Request, Response } from "express";
import { IGrupe } from "../model/IGroup";
import groupTables from "../DataBase/GrupeShema";
import mongoose, { mongo } from "mongoose";


export const getAllGroup = async (req: Request, res: Response) => {
    try {
        let group: IGrupe[] | undefined = await groupTables.find();
        if (group) {
            return res.json(group)
        }
    } catch (error) {
        return res.json({ 'msg': 'Data is Not Found' });

    }
}


export const createGroup = async (req: Request, res: Response) => {
    try {
        let { name, number, email, address } = req.body;
        const theGroup: IGrupe | null | undefined = await new groupTables({ name: name, number: number, email: email, address: address }).save()

        if (theGroup) {
            return res.json({
                data: theGroup,
                msg: 'create a gruop'
            })

        }
    } catch (error) {
        console.error('eroor create group', error);
        return res.json({
            msg: 'failed create group'
        })

    }

}



export const getGroup = async (req: Request, res: Response) => {
   let {groupId} = req.params;

   const group  =  new mongoose.Types.ObjectId(groupId)

    let theGroup: IGrupe | null | undefined = await groupTables.findById(group)

   if (!theGroup) {
    res.status(400).json({
        data:null,
        msg:"id is not found"
    })
    
   }
   return res.json(theGroup)
}