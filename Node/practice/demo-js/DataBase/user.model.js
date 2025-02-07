import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    namm:{type:String , require:true},
    age:{type:String , require:true},
    number:{type:String , require:true}
},{timestamps:true})

export const User = mongoose.model('User' ,userSchema )