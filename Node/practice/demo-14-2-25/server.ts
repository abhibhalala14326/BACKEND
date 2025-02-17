import express, { Request, Response, Application } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import groupRouter from './router/groupRouter'

dotenv.config()

const dbUrl: any = process.env.DB_URL
const dbName: string | null | undefined = process.env.DB_NAME
const port: string | number | undefined = process.env.PORT || 9999
const app: Application = express()
app.use(express.json())


app.use("/group", groupRouter)



if (port) {

    app.listen(port, () => {
        if (dbName && dbUrl) {
            mongoose.connect(dbUrl, { dbName: dbName })
                .then(() => {
                    console.log('database connect')
                })
                .catch(() => {
                    console.log('database is not conect');
                })
        }
        console.log(`http://127.0.0.1:${port}`)
    })

}