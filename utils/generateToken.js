import jwt from 'jsonwebtoken';

const generateToken = (payLoad) => {
    let token= jwt.sign({payLoad},process.env.JWT_KEY)
    return token
}

export default generateToken