import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./router/userRouter";
dotenv.config({ path: "./.env" });

const port: number | string | undefined = process.env.PORT || 9999;
const dbUrl: any = process.env.MONGO_DB_CLOUD_URL;
const dbname: string | undefined = process.env.MONGO_DB_DATABASE;
const hostname: string = "127.0.0.1";

const app: Application = express();
app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use('/user', userRouter)

if (port) {
  app.listen(port, () => {
    if (dbUrl && dbname) {
      mongoose
        .connect(dbUrl, { dbName: dbname })
        .then(() => {
          console.log("database done");
        })
        .catch(() => {
          console.error(`err`);
          process.exit(0);
        });
    }
    console.log(`http://${hostname}:${port}`);
  });
}
