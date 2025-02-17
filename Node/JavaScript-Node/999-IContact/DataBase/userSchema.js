import mongoose from "mongoose";
import { Types } from "mongoose";


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    name:{type:String , required:true},
    password:{type:String , required:true},
    imgUrl:{type:String , required:true},
    isAdmin: { type: Boolean },
},{timestamps:true})

export const UserTable = mongoose.model("UserTables" , userSchema)