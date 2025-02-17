import { UserTable } from "../DataBase/userSchema.js"

export const getAllUser = async (req, res) => {

    const user = await UserTable.find()
    res.json({
        data: user,
        msg: "users data"
    })



}

export const getUser = async (req, res) => {

    let {id} = req.params;
    const user = await UserTable.findById(id)
    res.json({
        data: user,
        msg: "users data"
    })



}



export const createUser = async (req, res) => {
    let { username, name, password, email, isAdmin, imgUrl } = req.body;

    const theUSer = await UserTable({ username: username, name: name, password: password, 
        isAdmin: isAdmin, imgUrl: imgUrl , email:email }).save()

        return res.json({
            data:theUSer,
            msg:"create a user"
        })
}

export const UserUpdate = async(req,res) =>
{
    let {id} = req.params;
    let { username, name, password, email, isAdmin, imgUrl } = req.body;


    let theUSerUpdate = await UserTable.findByIdAndUpdate(
        id,
        { username, name, password, email, isAdmin, imgUrl },
        {new:true}
    )

    return res.json({
        data:theUSerUpdate,
        msg:'update a user'
    })
}


export const UserDelete = async (req, res) => {
    let { id } = req.params;


    let theUSerdelete = await UserTable.findByIdAndDelete(
        id
    )

    return res.json({
        data: theUSerdelete,
        msg: 'delete a user'
    })
}