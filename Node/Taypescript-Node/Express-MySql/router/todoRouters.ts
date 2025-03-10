import { Router } from "express";

import {createTodo , getAllTodos , GetTodo , todoDelete  , UpdateTodo} from '../controller/todoController'

const todosRoutes:Router = Router()

todosRoutes.post("/inserttodos", createTodo);
todosRoutes.get("/getalltodos", getAllTodos)
todosRoutes.get("/gettodo/:id", GetTodo)
todosRoutes.get("/deletetodos/:id", todoDelete)
todosRoutes.put("/updatetodo/:id", UpdateTodo)

export default todosRoutes