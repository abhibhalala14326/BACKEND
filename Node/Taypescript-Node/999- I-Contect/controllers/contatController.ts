import { Request, Response } from "express";
import { IUser } from "../model/IUser";
import { UserTable } from "../DataBase/userSchema";
import { Contact } from "../DataBase/contactSchema";
import { IContact } from "../model/IContact";



export const getAllContact = async (req: Request, res: Response) => {

    let users: IUser[] | null | undefined = await Contact.find()

    if (users) {
        return res.status(200).json({
            data: users
        })
    }

}

export const getContact = async (req: Request, res: Response) => {

    let { id } = req.params;

    const findUser: IContact | null | undefined = await Contact.findById(id)

    return res.json({
        data: findUser
    })

}

export const createContact = async (req: Request, res: Response) => {

    let {name ,username , user , email , imageUrl ,mobile, company,title }  = req.body;

    const theCreateContact:IContact | null | undefined = await new Contact({
        name:name, username:username, user:user, email:email, imageUrl:imageUrl, mobile:mobile, company:company, title:title  
    }).save()

    return res.json({
        data:theCreateContact,
        msg:"create a contact"
    
    })

}

export const updatedContact = async(req:Request , res:Response)=>
{
    let {id} = req.params;
    let { name, username, user, email, imageUrl, mobile, company, title } = req.body;


    const theUpdateContact:IContact | null | undefined = await Contact.findByIdAndUpdate(id,
        { name, username, user, email, imageUrl, mobile, company, title },
        {new:true}
    )

    return res.status(200).json({
        data:theUpdateContact,
        msg:"Update A Data"
    })
}

export const deleteContact = async (req:Request , res:Response)=>
{
    let {id} = req.params

    const theDeleteContact:IContact | null | undefined = await Contact.findByIdAndDelete(id)

    res.status(200).json({
        data:theDeleteContact,
        msg:'Delete a Contact'

    })
}
