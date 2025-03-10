import express from 'express'
import *  as  userController from '../Controller/userController.js'
import { body } from 'express-validator'

const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    await userController.getAllUser(req, res)
})

userRouter.get('/:id',
    [
        body("username").isEmpty().withMessage("UserName is Required"),
        body("email").isEmail().withMessage("Proper Email is Required"),
        body("passwors").isStrongPassword().withMessage("Strong Password is Required")


    ], async (req, res) => {
        await userController.getUser(req, res)
    })


userRouter.post("/register", async (req, res) => {
    await userController.userRegister(req, res)
})

userRouter.put("/:id", async (req, res) => {
    await userController.UserUpdate(req, res)
})

userRouter.delete('/:id', async (req, res) => {
    await userController.UserDelete(req, res)
})

export default userRouter;
