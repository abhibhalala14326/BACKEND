import mongoose from "mongoose";

const GrupeSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }

)

const GroupeTable = mongoose.model('Groupe' , GrupeSchema)

export default GroupeTable;