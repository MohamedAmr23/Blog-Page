import { userModel } from "../../../database/models/user.model.js"
import bcrypt from 'bcrypt'
import generateToken from "../../../utils/generateToken.js"


export const signup=async(req,res)=>{
  
        const user=await userModel.findOne({email})
        if(user){
            res.json({msg:'user already exist'})
        }else{
            bcrypt.hash(password,Number( process.env.ROUND),async function(err, hash) {
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
            let token=generateToken({name:user.name,role:user.role,userId:user._id})
            res.json({msg:'login',token})
        }else{
            res.json({msg:'password incorrect'})
        }
    }else{
        res.json({msg:'account not fount'})
    }
}