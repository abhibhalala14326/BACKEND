import mongoose from "mongoose";
import { IGroup } from "../models/IGroup";


const GroupTables = new mongoose.Schema<IGroup>(
    {
        name:{
            type: String,

            required:true,
            unique:true,
            uppercase:true
        }
    } , {timestamps:true}
)

export const Group = mongoose.model<IGroup>('Group' , GroupTables)