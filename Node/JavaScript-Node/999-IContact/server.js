import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import groupRouter from './router/groupRouter.js';
import userRouter from './router/userRouter.js';

dotenv.config({path:'./.env'})

const hostname = '127.0.0.1';
const port = process.env.PORT || 9988
const dburl = process.env.MONGOSH_DB_CLOUD_URL;
const dbName = process.env.MONGOSH_DB_DATABASE;


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true}))

// routers
app.use('/group', groupRouter)
app.use('/user', userRouter)





if (port) {
    app.listen(port, () => {
        if (dbName && dburl) {
            mongoose.connect(dburl, { dbName: dbName }).then(() => {
                console.log('database conect');
            }).catch((error) => {
                console.error('error')
                process.exit(0)

            })
        }
        console.log(`http://${hostname}:${port}`);

    })  
}

