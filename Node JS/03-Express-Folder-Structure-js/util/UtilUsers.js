import path from 'path'
const jsonfile = require('jsonfile')

export class  usersUtil {

      static usersJsonPath = path.join(__dirname, '..' , 'db' , 'users.json')


     static getAllUserFromDb(){
        return new Promise((resolve ,rejects) =>
        {
            jsonfile.readFile(this.usersJsonPath , (err,data) =>
            {
                if(err)
                {
                    rejects(err)
                }else
                {
                    resolve(data)
                }
            })
        })
    }
}