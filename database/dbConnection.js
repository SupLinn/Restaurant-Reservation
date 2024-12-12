import mongoose from "mongoose"

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "RESTAURANT_RESERVATION"
    })
    .then(()=>{
        console.log(`Connection to database Successfully!!!`)
    })
    .catch((error)=>{
        console.log(`Some error occured while connecting to database ${error}`)
    })
}