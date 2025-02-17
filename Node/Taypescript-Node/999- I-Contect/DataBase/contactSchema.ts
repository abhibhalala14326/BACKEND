import mongoose, { Schema } from "mongoose";
import { IContact } from "../model/IContact";

const contactSchema = new Schema<IContact>(
    {
        user: { type: String },
        name: { type: String },
        imageUrl: { type: String },
        mobile: { type: String },
        email: { type: String },
        company: { type: String },
        title: { type: String }
    },
    {
        timestamps: true
    }
)


export const Contact = mongoose.model<IContact>("Contact" , contactSchema)