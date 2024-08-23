import { userModel } from "../../../database/models/user.model.js"
import bcrypt from 'bcrypt'
export const signup=async(req,res)=>{
    const {name,email,password}=req.body
    const user=await userModel.findOne({email})
    if(user){
        res.json({msg:'user already exist'})
    }else{
        bcrypt.hash(password, 8,async function(err, hash) {
            await userModel.insertMany({name,email,password:hash})
            res.json({msg:'success'})
        });
     
    }

}
export const signIn=async(req,res)=>{
    const {email,password}=req.body
    const user=await userModel.findOne({email})
    if(user){
        const match=await bcrypt.compare(password,user.password)
        if(match){
            res.json({msg:'login',user:user._id})
        }else{
            res.json({msg:'password incorrect'})
        }
    }else{
        res.json({msg:'account not fount'})
    }
}