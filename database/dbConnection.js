import mongoose, { Mongoose } from "mongoose";

export function dbConnect(){
    mongoose.connect(process.env.DB_Connection).then((
        console.log('success database')
    )).catch(()=>{
        console.log('error')
    })
}