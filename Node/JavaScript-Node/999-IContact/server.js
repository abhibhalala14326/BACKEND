import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import groupRouter from './router/groupRouter';

dotenv.config({path:'./.env'})

const hostname = '127.0.0.1';
const port = process.env.PORT || 9988
const dburl = process.env.MONGOSH_DB_CLOUD_URL;
const dbName = process.env.MONGOSH_DB_DATABASE;

const app = express()
app.use('/group' , groupRouter)





if (port) {
    app.listen(port, () => {
        if (dbName && dburl) {
            mongoose.connect(dbturl, { dbName: dbName }).then(() => {
                console.log('database conect');
            }).catch((error) => {
                console.error('error')
                process.exit(0)

            })
        }
        console.log(`http://${hostname}:${port}`);

    })  
}

