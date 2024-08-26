export const validation=(schema)=>{
    return(req,res,next)=>{
        const {name,email,password}=req.body
        const {error}=schema.validate(req.body,{abortEarly:false})
        if(!error){ 
            next()
        }else{
            res.json(error.details)
        }
    }
}