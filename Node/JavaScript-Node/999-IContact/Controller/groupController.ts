import GroupeTable from "../DataBase/GropeSchema.js"





export const getAllGroup = async(req , res) =>
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

export const CreateGroup = async(req , res) =>
{
    let { name, email, number, pincode, address } = req.body;

    const theGruop = new GroupeTable({name:name , email:email , number:number ,pincode:pincode , address:address})

    if (theGruop) {
        return res.json({
            data:theGruop,
            msg:'create a data'
        })
    }

}