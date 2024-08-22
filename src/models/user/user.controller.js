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