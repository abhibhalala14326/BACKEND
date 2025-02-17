import mongoose,{Schema} from "mongoose";


const VideoSchema = new Schema ({
    videoFile:{
        type: String, // cloudinary url
        require:true
    },
    thumbnail:{
        type: String, 
        require:true// cloudinary url

    },title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    duration:{
        type:Number,
        require:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:String,
        require:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'Users'
    }
    
},{timestamps:true})


export const Video = mongoose.model('Video' , VideoSchema)