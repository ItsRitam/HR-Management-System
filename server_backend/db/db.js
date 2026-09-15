import mongoose from "mongoose";


const connectToDatabase = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:");
    console.log(error);
  }
};

export default connectToDatabase;
