import { Request, Response } from "express";
import { EcomProduct } from "../model/EcomProduct";

export const GetAllProduct: any = async (req: Request, res: Response) => {

    let TheGetAllProduct = await EcomProduct.findAll()

    return res.status(201).json({
        data: TheGetAllProduct,
        msg: "Get All Product"
    })

}

export const GetProduct: any = async (req: Request, res: Response) => {

    let { id } = req.params

    let findID = await EcomProduct.findByPk(id)
    if (!findID) {
        return res.status(400).json({
            data: null,
            msg: "ID in Not Found"
        })
    }

    return res.status(201).json({
        data: findID,
        msg: "Get A Product"
    })

}


export const CreateProduct: any = async (req: Request, res: Response) => {

    let TheCreateProduct = await EcomProduct.create({ ...req.body })

    return res.status(201).json({
        data: TheCreateProduct,
        msg: "Create A Product"
    })

}


export const UpdateProduct: any = async (req: Request, res: Response) => {

    let { id } = req.params

    let findID = await EcomProduct.findByPk(id)
    if (!findID) {
        return res.status(400).json({
            data: null,
            msg: "ID in Not Found"
        })
    }

    let TheUpdateProduct = await EcomProduct.update({ ...req.body }, { where: { id } })

    return res.status(201).json({
        data: TheUpdateProduct,
        msg: "Update A Product"
    })

}


export const DeleteProduct: any = async (req: Request, res: Response) => {
    let { id } = req.params

    let findID = await EcomProduct.findByPk(id)
    if (!findID) {
        return res.status(400).json({
            data: null,
            msg: "ID in Not Found"
        })
    }

    let TheDeleteProduct = await EcomProduct.destroy({ where: { id } })


    return res.status(201).json({
        data: TheDeleteProduct,
        msg: "Delete A Product"
    })

}