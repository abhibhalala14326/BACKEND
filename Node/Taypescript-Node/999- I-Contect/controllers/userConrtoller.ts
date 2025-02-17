import { Request, Response } from "express";
import { IUser } from "../model/IUser";
import { UserTable } from "../DataBase/userSchema";

export const getAllUser = async (req: Request, res: Response) => {

    const theGetAllUser: IUser[] | null | undefined = await UserTable.find()

    return res.json(theGetAllUser)
}

export const getUser = async (req: Request, res: Response) => {

    let { id } = req.params
    const theGetUser: IUser[] | null | undefined = await UserTable.findById(id)

    return res.json(theGetUser)
}

export const createUser = async (req: Request, res: Response) => {
    let { name, password, email, isAdmin, imageUrl } = req.body

    const thecreateUser: IUser | null | undefined = await new UserTable({
        name: name, password: password,
        email: email, isAdmin: isAdmin, imageUrl: imageUrl
    }).save()

    return res.json({
        data: thecreateUser,
        msg: 'Upadate a User'
    })


}

export const UpdateUser = async (req: Request, res: Response) => {
    let { id } = req.params
    let {username, name, password, email, isAdmin, imageUrl } = req.body

    const theUpdateUser: IUser | null | undefined = await UserTable.findByIdAndUpdate(
        id,
        {username, name, password, email, isAdmin, imageUrl },
        { new: true }
    )

    return res.json({
        data: theUpdateUser,
        msg: 'Upadate a User'
    })


}

export const DeleteUser = async (req: Request, res: Response) => {
    let { id } = req.params

    const theDeleteUser: IUser | null | undefined = await UserTable.findByIdAndDelete(id
    )

    return res.json({
        data: theDeleteUser
    })
}


