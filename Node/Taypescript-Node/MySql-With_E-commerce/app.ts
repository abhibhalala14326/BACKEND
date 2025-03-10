import express,{Application, urlencoded} from "express"
import categoryRouter from "./router/CategoryRouter";
import  connection  from "./db/config";
import SubCategoryRouter from "./router/SubCategoryRouter";
import ProductRouter from "./router/ProductRouter";

const app:Application = express()
app.use(express.json());
app.use(urlencoded({extended:true}))

// Routers
app.use('/category', categoryRouter)
app.use('/subcategory', SubCategoryRouter)
app.use("/product" , ProductRouter)

const port:number = 9999;
const hostName:string = "127.0.0.1"

connection.sync().then(()=>
{
    console.log("DataBase connection ");
    
}).catch((error)=>{
    console.log("error" , error);
    
})

if (port) {

    app.listen(port,()=>
    {
        console.log(`http://${hostName}:${port}`);
        
    })
    
}

