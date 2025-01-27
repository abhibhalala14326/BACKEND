import path from "path";
const jsonfile = require("jsonfile");
import { IUser } from "../models/IUsers";

export class UsersUtil {
  private static usersJsonPath = path.join(__dirname, "..", "DB", "users.json");


  public static getAllUserFromDb(): Promise<IUser[]> {
        console.log('dirname:',__dirname);

    return new Promise((resolve, rejects) => {
      jsonfile.readfile(this.usersJsonPath, (err: any, data: any) => {
        
        if (err) {
            rejects(err)
        }else{
            resolve(data)
        }
      });
    });
  }
};


