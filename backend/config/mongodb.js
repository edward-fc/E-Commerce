import mongoose from "mongoose";

const connectDB = async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("DB Connected")
    })
    
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`) // in tutorial there is an  after MONGO_URI
}

export default connectDB;