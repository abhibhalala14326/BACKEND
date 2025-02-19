import express from 'express';
import { registerUser } from '../controllers/user.js';  
import {upload} from '../middleweres/multer.middlewares.js'

const userRouter = express.Router();

userRouter.post("/register", upload.fields([
    {
        name: "avatar",
        maxCount: 1
    },
    {
        name: "coverImage",
        maxCount: 1
    }
]), async (req, res) => {
    try {
        await registerUser(req, res);
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong during registration", error: error.message });
    }
});

export default userRouter;
