import { Request, Response } from "express";
import { EcomSubCategory } from "../model/EcomSubCategoryModel";

export const createSubCategory: any = async (req: Request, res: Response) => {

    let theCreateSubCategory = await EcomSubCategory.create({ ...req.body })

    return res.status(201).json({
        data: theCreateSubCategory,
        msg: "create a SubCategory"

    })
}

export const getAllSubCategory: any = async (req: Request, res: Response) => {

    let TheGetAllSubCategory = await EcomSubCategory.findAll()

    return res.json({
        data: TheGetAllSubCategory,
        msg: "Get all SubCategory"

    })
}


export const GetSubCategory: any = async (req: Request, res: Response) => {
    let { id } = req.params

    let TheGetSubCategory = await EcomSubCategory.findByPk(id)

    if (!TheGetSubCategory) {
        return res.status(400).json({
            data: null,
            msg: "Id is Not Found"
        })
    }

    return res.status(400).json({
        data: TheGetSubCategory,
        msg: "Get Subcategory"
    })

}

export const DeleteSubCategory: any = async (req: Request, res: Response) => {

    let { id } = req.params;
    let FindID = await EcomSubCategory.findByPk(id)

    if (!FindID) {
        return res.status(400).json({
            data: null,
            msg: "Id is Not Found"
        })
    }

    let TheDeleteSubCategory = await EcomSubCategory.destroy({ where: { id } })

    return res.status(400).json({
        data: TheDeleteSubCategory,
        msg: "Delete a SubCategory"
    })

}

export const UpdateSubCategory: any = async (req: Request, res: Response) => {

    let { id } = req.params;
    let FindID = await EcomSubCategory.findByPk(id)

    if (!FindID) {
        return res.status(400).json({
            data: null,
            msg: "Id is Not Found"
        })
    }

    let TheUpdateSubCategory = await EcomSubCategory.update({ ...req.body }, { where: { id } })

    return res.status(400).json({
        data: TheUpdateSubCategory,
        msg: "Update a SubCategory"
    })

}