import mongoose from "mongoose";


const Shopschema = new mongoose.Schema({
    name:{type:String,require:true , uppecase:true , },
    category:{type:String , require:true},
    users:[{
        type: Schema.Types.ObjectId,
        ref:'User'
    }]
},{timestamps:true})

export const Shop = mongoose.model('Shop',Shopschema)