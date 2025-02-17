import express from 'express'
import * as groupController from '../Controller/groupController.js'
import { body } from 'express-validator'

const groupRouter = express.Router()


groupRouter.get('/', async (req, res) => {
    await groupController.getAllGroup(req, res)
})

groupRouter.post('/', [
    body('name')
        .not()
        .isEmpty()
        .withMessage('name is Required')],
    async (req, res) => {
        await groupController.CreateGroup(req, res)
    })

export default groupRouter;


groupRouter.get('/:groupId', async (req, res) => {
    await groupController.getGroup(req, res)
})