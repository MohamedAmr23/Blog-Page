import mongoose, { Types } from "mongoose";

const blogSchema= mongoose.Schema({
    title:String,
    desc:String,
    createdBy:{
        type:mongoose.Types.ObjectId()
    }
},{
    timestamps:true
})

export const blogModel=mongoose.model('blog',blogSchema)