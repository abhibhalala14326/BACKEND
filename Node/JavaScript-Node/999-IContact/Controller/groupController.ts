import GroupeTable from "../DataBase/GropeSchema"





export const getAllGroup = async (req , res) =>
{
    try {
        let group = await GroupeTable.find()
        if (group) {
           return res.json(group)

        }
    } catch (error) {
        return res.json({ 'msg': 'Data is Not Found' });

    }
}