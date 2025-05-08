import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongodb connected: ${connectionDB.connection.host}`);
  } catch (err) {
    console.log("Mongodb connection error", err);
  }
};
