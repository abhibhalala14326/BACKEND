import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

export const dbUrl = process.env.DB_URL;


export const dbname = process.env.DB_NAME;

export const connectMongosh = async () => {

    console.log(dbname);

    if (dbUrl && dbname) {
        try {
            await mongoose.connect(dbUrl, { dbName: dbname });
            
            console.log("Database connected successfully!");
        } catch (error) {
            console.error("Database connection error:", error);
        } 
    }

};
