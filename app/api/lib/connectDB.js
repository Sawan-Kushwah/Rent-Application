import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        if (mongoose.Connection.readyState >= 1) {
            console.log("Already connected");
            return;
        }

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
}