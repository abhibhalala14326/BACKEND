import express from "express";
import userRouter from "./routes/UserRouter.js";
const hostname = "127.0.0.1";
const port = 9999;

const app = express()

app.get('/', (req, res) => {
    res.json({
        msg: 'Home page '
    })
})

app.use('/api/users',userRouter)

app.listen(port ,()=> {
    console.log(`Express Server is started at http://${hostname}:${port}`);

}
)