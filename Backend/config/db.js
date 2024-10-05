import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.mongo_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
