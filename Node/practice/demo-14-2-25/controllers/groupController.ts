import { Request, Response } from "express";
import { IGroup } from "../models/IGroup";
import { Group } from "../DataBase/GroupTable";
import mongoose from "mongoose";



export const getAllGroupp = async (req: Request, res: Response) => {

    const group: IGroup[] | undefined = await Group.find()

    return res.json(group)

}

export const createGroup = async (req: Request, res: Response) => {

        let { name } = req.body;

        const theGroup: IGroup | null | undefined = await new Group({ name: name }).save()

        if (theGroup) {
            return res.json({
                data: theGroup,
                mag: 'create a group'
            })
        }
}



export const getGroupp = async (req: Request, res: Response) => {

    let {groupId} = req.params;

    const mongooseGroupID  =  new mongoose.Types.ObjectId(groupId)

    let TheGroupId:IGroup |null |undefined = await Group.findById(mongooseGroupID)

    if (!TheGroupId) {
        return res.json({
            data:null,
            msg:'id is not found'
        })
        
    }


res.json(TheGroupId)
    

}