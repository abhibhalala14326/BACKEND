import path, { resolve } from "path"
import { IProduct } from "../models/IProduct"


const jsonfile = require('jsonfile')

export class productUtils{
    private static productPath = path.join(__dirname , '..', 'db' , 'products.json' )

    public static getAllProduct():Promise<IProduct[]>{
        return new Promise((resolve , rejects)=>
        {
            jsonfile.readFile(this.productPath, (err:any ,data:any )=>
            {
                if (err) {
                    rejects(err)
                }else{
                    resolve(data)
                }
            })
        })
    }


}