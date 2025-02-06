import mongoose from "mongoose";




export const GroupSchema = new mongoose.Schema({
    name:{type:String , require:true ,unique:true}
},{timestamps:true})

const GroupTables = mongoose.model('GroupTables' , GroupSchema);
export default GroupTables;