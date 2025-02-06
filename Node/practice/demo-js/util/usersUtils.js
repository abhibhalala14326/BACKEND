



import jsonfile from 'jsonfile'

export class usersUtils {
    static GetPath = 'D:/BACKEND/Node/practice/demo-js/db/users.json'

    static getAlldataDb() {
       return new Promise((resolve, rejects) => {
            jsonfile.readFile(this.GetPath, (err, data) => {
                if (err) {
                    rejects(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}