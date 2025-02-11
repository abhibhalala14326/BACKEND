import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const dbname = process.env.DB_NAME;
const dbUrl = process.env.DB_URL;



export const connectMongosh = async () => {
    try {
        await mongoose.connect(dbUrl, { dbName: dbname });
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};
