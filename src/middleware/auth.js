import jwt from 'jsonwebtoken';
export  const userAuth=async(req,res,next)=>{
    const token = req.header('token')
    jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
        if(err){
            res.json({msg:"error",err})
        }else{
            req.userId=decoded.userId;
            next()
        }
      });
}