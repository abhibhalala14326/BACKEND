d:\BACKEND\Node\Taypescript-Node\01-Express-server-creation\.gitignoreimport express from 'express'
import path from 'path'

const BooksRouter = express.Router()
// const jsonfile = require('jsonfile')
import jsonfile from 'jsonfile';
// const jsonfile = await import('jsonfile');


BooksRouter.get('/' , (req, res)=>
{
    const file = 'D:/BACKEND/NodeJS/04-Express-json-without-mvc-js/db/books.json'
    // const booksJsonPath = path.join(__dirname, "..", "db", "books.json");

    jsonfile.readFile(file, function (err, obj) {
        if (err) console.error(err)
        // console.dir(obj)
    res.json(obj)
    })
})

export default BooksRouter;