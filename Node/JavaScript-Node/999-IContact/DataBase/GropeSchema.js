import mongoose from "mongoose";

const GrupeSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        email:
        {
            type:String,
            required:true,
            unique:true
        },
        number:{
            type: String,
            required: true,
            unique: true

        },
        address:{
            type: String,
            required: true,
            unique: true
        },pincode:
        {
            type: String,
            required: true,
            unique: true
        },
      

    },
    {
        timestamps: true
    }

)

const GroupeTable = mongoose.model('Groupe' , GrupeSchema)

export default GroupeTable;