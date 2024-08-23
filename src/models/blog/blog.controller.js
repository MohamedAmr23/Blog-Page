import { blogModel } from "../../../database/models/blog.model.js"

export const addBlog=async(req,res)=>{
    const{title,desc,createdBy}=req.body
    await blogModel.insertMany({title,desc,createdBy})
    res.json({msg:'success'})
}
export const getAllBlog=async(req,res)=>{
    const blog=await blogModel.find().populate('createdBy','name')
    res.json({msg:'success',blog})
}
export const getUserBlog=async(req,res)=>{
    const{id}=req.params
    const blog=await blogModel.find({createdBy:id})
    res.json({msg:'success',blog})
}
export const updateBlog=async(req,res)=>{
    const{title,desc,_id}=req.body
    const blog=await blogModel.findByIdAndUpdate({_id},{title,desc},{new:true})
    if(blog){
        res.json({msg:'success',blog})
    }else{
        res.json({msg:'blog not found'})
    }

}
export const deleteBlog=async(req,res)=>{
    const{_id}=req.body
    const blog=await blogModel.findByIdAndDelete({_id})
    if(blog){
        res.json({msg:'success',blog})
    }else{
        res.json({msg:'blog not found'})
    }
   
}