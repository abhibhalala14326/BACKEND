import { connectMongosh } from "./dataBase/index.js"; 
import dotenv from 'dotenv'
import { app } from "./app.js";

dotenv.config()

const port = process.env.PORT || 9999
const hosName = '127.0.0.1'

if (port) {
    app.listen(port, async() => {
       await connectMongosh()

        console.log(`http://${hosName}:${port}`);

    })  
}
