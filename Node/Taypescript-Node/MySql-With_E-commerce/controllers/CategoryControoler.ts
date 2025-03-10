import { Request, Response } from "express";
import { EcomCategory } from "../model/EcomCategoryModel";


export const CreateCategory: any = async (req: Request, res: Response) => {

    let createCategory = await EcomCategory.create({ ...req.body });

    return res.status(201).json({
        data: createCategory,
        msg: "create A category"
    })

}


export const getAllCategory: any = async (req: Request, res: Response) => {

    let theGetAllCategory = await EcomCategory.findAll()

    return res.status(201).json({
        data: theGetAllCategory,
        msg: "Get All Category"
    })

}

export const getCategory: any = async (req: Request, res: Response) => {

    let { id } = req.params

    let theGetCategory = await EcomCategory.findByPk(id)

    if (!theGetCategory) {
        return res.status(400).json({
            data: null,
            msg: " id Is Not Found"
        })
    }
    return res.json({
        data: theGetCategory,
        msg: "Get Category"
    })

}


export const deleleCategory: any = async (req: Request, res: Response) => {
    let { id } = req.params

    let TheDeleteCategpry = await EcomCategory.destroy({ where: { id } })
    if (!TheDeleteCategpry) {
        return res.status(400).json({
            data: null,
            msg: " id Is Not Found"
        })
    }

    return res.status(201).json({
        data: null,
        msg: "Category is Delete"
    })
}

export const updateCategory: any = async (req: Request, res: Response) => {
    let { id } = req.params

    let findID = await EcomCategory.findByPk(id)

    if (!findID) {
        return res.status(400).json({
            data: null,
            msg: "ID is Not Found"
        })
    }


    let TheUpdateCategory = await EcomCategory.update({ ...req.body }, { where: { id } })

    return res.status(201).json({
        data: TheUpdateCategory,
        msg: "Update a category"
    })




}