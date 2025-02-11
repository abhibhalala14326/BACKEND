import { Request, Response } from "express";
import { IGrupe } from "../model/IGroup";
import groupTables from "../DataBase/GrupeShema";


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