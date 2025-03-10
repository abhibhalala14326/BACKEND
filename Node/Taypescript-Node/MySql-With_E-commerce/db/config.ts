import { Sequelize } from "sequelize-typescript";
import { EcomCategory } from "../model/EcomCategoryModel";
import { EcomSubCategory } from "../model/EcomSubCategoryModel";
import { EcomProduct } from "../model/EcomProduct";

const connection = new Sequelize({
    dialect:"mysql",
    host:"127.0.0.1",
    username:"root",
    password:"admin@1234",
    database:"ecommerce",
    logging:false,
    models:[EcomCategory , EcomSubCategory , EcomProduct]
})

export default connection