import mongoose,{Schema} from "mongoose";
import { IUser } from "../interface/user";

const useSchems = new Schema<IUser>({
    username: String,
    email: String,
    password: String,
    age: Number ,
},{timestamps:true})

export const User = mongoose.model<IUser>("user" , useSchems);