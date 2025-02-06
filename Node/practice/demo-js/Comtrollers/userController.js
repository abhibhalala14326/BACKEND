import { usersUtils } from "../util/usersUtils.js"



export const getAllUersData = async(req,res) =>
{
    try {
       let Userdata = await usersUtils.getAlldataDb() ;
        return res.status(200).json(Userdata)
    } catch (error) {
        return res.status(500).json({msg:'server data'})
    }
}