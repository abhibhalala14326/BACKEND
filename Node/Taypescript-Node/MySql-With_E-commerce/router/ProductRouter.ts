import { Router } from "express";
import { CreateProduct, DeleteProduct, GetAllProduct, GetProduct, UpdateProduct } from "../controllers/ProductController";

const ProductRouter:Router = Router()

// Get All Product
ProductRouter.get("/" ,GetAllProduct)
// Get A Product
ProductRouter.get("/:id" , GetProduct)
// Create a Product
ProductRouter.post("/" , CreateProduct)
// Update a Product
ProductRouter.put("/:id" , UpdateProduct)
// Delete A Product
ProductRouter.delete("/:id" , DeleteProduct)


export default ProductRouter