import { Request, Response } from "express";
import { Todos } from "../model/TodosModel";

// Todos Create
export const createTodo: any = async (req: Request, res: Response) => {
    var todos = await Todos.create({ ...req.body });

    return res.status(200).json({
        data: todos,
        msg: 'Todo Create Successfully'
    })
}

// Get All Todos 
export const getAllTodos: any = async (req: Request, res: Response) => {
    let getTodos = await Todos.findAll()
    return res.json({
        msg: "Get All Todos",
        data: getTodos
    })
}

// Get Todo
export const GetTodo: any = async (req: Request, res: Response) => {
    let { id } = req.params
    let todo = await Todos.findByPk(id)

    if (!todo) {
        return res.status(400).json({
            data: null,
            msg: "Id is not found"
        })
    }

    return res.status(200).json({
        data: todo,
        msg: "Get Todo"
    })

}

// Delete Todo

export const todoDelete: any = async (req: Request, res: Response) => {

    let { id } = req.params

    let todoDelete = await Todos.destroy({ where: { id } })

    if (!todoDelete) {
        return res.status(400).json({
            data: null,
            msg: "ID is not found"
        })
    }
     return res.status(201).json({
        data: todoDelete,
        msg: "delete this todo"
    })

}

// Update Todo
export const UpdateTodo: any = async (req: Request, res: Response) => {
    let { id } = req.params
    let { name, description } = req.body;

    let todoId = await Todos.findByPk(id)
    if (!todoId) {
        return res.status(400).json(
            {
                data: null,
                msg: "ID is not found"
            })
    }

    let updateTodo = await Todos.update({ name, description }, { where: { id } })

    return res.status(201).json({
        msg: "Todo is Updated",
        data: updateTodo
    })
}