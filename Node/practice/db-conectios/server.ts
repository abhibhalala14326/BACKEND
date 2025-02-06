import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./.env" });
const app: Application = express();
const port: Number | string | undefined = process.env.PORT || 9999;
const hostName: string = "12.0.0.1";
const dbUrl: any = process.env.DB_CLOUD_URL;
const dbname: any = process.env.DB_DATABASE_URL;

mongoose
  .connect(dbUrl, { dbName: dbname })
  .then(() => {
    console.log("contions database");
  })
  .catch((err) => {
    console.log("error");
  });

app.listen(port, () => {
  console.log(`http://${hostName}:${port}`);
});
