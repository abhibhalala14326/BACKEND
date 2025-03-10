import { validationResult } from "express-validator"
import { UserTable } from "../DataBase/userSchema.js"
import jwt from 'jsonwebtoken'
import bcryptjs from "bcryptjs"
import gravatar from 'gravatar'

export const getAllUser = async (req, res) => {

    const user = await UserTable.find()
    res.json({
        data: user,
        msg: "users data"
    })





}

export const getUser = async (req, res) => {

    let { id } = req.params;
    const user = await UserTable.findById(id)
    res.json({
        data: user,
        msg: "users data"
    })



}


export const userRegister = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    try {

        let {username , email , password , imageUrl} = body.req

        // check id the user is exists

        const userObj = await  UserTable.findOne({email});
        if(!userObj){
            return res.status(200).json({
                data:null,
                msg:"the user is alredy exists "

            })

            // password encrption

            const salt = await bcryptjs.genSalt(10)
            const hashPassword = await bcryptjs.hash(password , salt)

            const imageUrl = gravatar.url(email,{
                size:"200",
                rating:"pg",
                default:'mm'
            })

            const newUser = {
                username : username,
                email:email,
                password:password,
                imageUrl: imageUrl,
                isAdmin:isAdmin
            }



            const theUserObj = await new UserTable(newUser).save();

            if(theUserObj)
            {
                return res.status(200).json({
                    data:theUserObj,
                    msg:"Registration  is success"
                })
            }

        }


    } catch (error) {
        return res.status(500).json({
            data: null,
            error: error.message
        })

    }


}


export const createUser = async (req, res) => {
    let { username, name, password, email, isAdmin, imgUrl } = req.body;

    const theUSer = await UserTable({
        username: username, name: name, password: password,
        isAdmin: isAdmin, imgUrl: imgUrl, email: email
    }).save()

    return res.json({
        data: theUSer,
        msg: "create a user"
    })
}

export const UserUpdate = async (req, res) => {
    let { id } = req.params;
    let { username, name, password, email, isAdmin, imgUrl } = req.body;


    let theUSerUpdate = await UserTable.findByIdAndUpdate(
        id,
        { username, name, password, email, isAdmin, imgUrl },
        { new: true }
    )

    return res.json({
        data: theUSerUpdate,
        msg: 'update a user'
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