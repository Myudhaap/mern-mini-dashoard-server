import mongoose from "mongoose";

export const connectDb = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL_MONGODB)

        console.log('MongoDB connected successfully');
    }catch(e){
        console.log("Error connecting to MongoDB", e.message)
        process.exit(1)
    }
}