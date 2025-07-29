import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
  try {
    const conne̥ctionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
    console.log("🚀 ~ :7 ~ connectDB ~ conne̥ctionInstance-->", conne̥ctionInstance.connection.host);
  } catch (error) {
    console.log("Database connection error:", error);
    process.exit(1); // Exit the process with failure
  }
}

export default connectDB;