import { Sequelize } from "sequelize-typescript";
import { Todos } from "../model/TodosModel";



const connection = new Sequelize({
    dialect:"mysql",
    host:"127.0.0.1",
    username:"root",
    password:"admin@1234",
    database:"todos",
    logging:false,
    models: [Todos]
})


export default connection