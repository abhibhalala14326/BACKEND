import express , {Request , Response , Application, urlencoded} from "express";
import connection from "./db/config";

const app:Application = express()
app.use(express.json())
app.use(urlencoded({extended:true}))

// Routers

import todosRoutes from "./router/todoRouters";
app.use("/todos" , todosRoutes)



const port:number = 9999
const hostName:string = "127.0.0.1"

// DataBase connection
connection
.sync()
.then(()=>
{
    console.log("dataBase successfully connection");
    
})
.catch((err)=>
{
    console.log("Error" , err);    
})

if (port) {
    app.listen(port , ()=>
    {
        console.log(`http://${hostName}:${port}`);
        
    })
}



















// npm i @types/validator body-parser mysql2 reflect-metadata sequelize sequelize-typescript 