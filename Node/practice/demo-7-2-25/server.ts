import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import jwt from 'jsonwebtoken'
import { User } from './model/userSchema';
import { IUser } from './interface/user';

const cookieParser = require('cookie-parser');
const bcrypt = require("bcryptjs")

dotenv.config();

const app: Application = express();
const hostName: string = "127.0.0.1";
const port: number | string | null | undefined = process.env.PORT || 9999;
const DbUrl: string | undefined = process.env.DATABASE_URL;
const dbName: string | null | undefined = process.env.DATABASE_NAME;

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.get("/", async (req: Request, res: Response) => {
    res.json("hello");
});

app.post("/create", async (req: Request, res: Response) => {
    let { username, password, email, age } = req.body

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    console.log(salt);

    let theUser: IUser | null | undefined = await User.create({
        username, password: hashPassword, email, age
    })

    let token = jwt.sign({ email }, "ssfsfdvdvdceffvnvnvvfjvj")
    res.cookie("token", token)
    res.status(201).json({ message: "User created successfully", user: theUser, token });




})

app.get("/logout", (req: Request, res: Response) => {
    res.cookie("token", '');
    res.redirect('/')
})




app.get("/create", async (req: Request, res: Response) => {

    let thefind = await User.find()
    res.json(thefind)
})



if (port) {
    app.listen(port, () => {
        if (DbUrl && dbName) {
            mongoose.connect(DbUrl, { dbName: dbName })
                .then(() => console.log("Database connected"))
                .catch((err: Error) => console.error("Database connection failed: ", err));
        } else {
            console.error("Database URL or Database name is not provided in the environment variables.");
        }
        console.log(`Server running at http://${hostName}:${port}`);
    });
}
