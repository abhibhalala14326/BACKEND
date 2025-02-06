import path from 'path'
// const jsonfile = require('jsonfile')
import jsonfile from 'jsonfile'

export class usersUtil {

    static usersJsonPath = 'D:/BACKEND/Node/JavaScript-Node/03-Express-Folder-Structure-js/db/users.json'


    static getAllUserFromDb() {
        return new Promise((resolve, rejects) => {
            jsonfile.readFile(this.usersJsonPath, (err, data) => {
                if (err) {
                    rejects(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}