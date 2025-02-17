import mongoose from "mongoose";
import GroupeTable from "../DataBase/GropeSchema.js"

export const getAllGroup = async (req, res) => {
    try {
        let group = await GroupeTable.find()
        if (group) {
            return res.json(group)

        }
    } catch (error) {
        return res.json({ 'msg': 'Data is Not Found' });

    }
}

export const CreateGroup = async (req, res) => {
    let { name } = req.body;

    const theGruop = await new GroupeTable({ name: name }).save()

    if (theGruop) {
        return res.json({
            data: theGruop,
            msg: 'create a data'
        })
    }

}


export const getGroup = async (req, res) => {
    let { groupId } = req.params;

    const mongoGroupID = new mongoose.Types.ObjectId(groupId)

    const group = await GroupeTable.findById(mongoGroupID)

    if (!group) {
        res.status(400).json({
            data: null,
            msg: "not Group id Found"
        })
    }

    return res.json(group)


}