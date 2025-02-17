import mongoose, { Schema } from "mongoose";
import { IUser } from "../model/IUser";

const UserSchema = new Schema<IUser>({
    username: { type: String,  },
    email: { type: String },
    password: { type: String },
    imageUrl: { type: String },
    isAdmin: { type: Boolean }

}, { timestamps: true })

export const UserTable = mongoose.model<IUser>("User", UserSchema)