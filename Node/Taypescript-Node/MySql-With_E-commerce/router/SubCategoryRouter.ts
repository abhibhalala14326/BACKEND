import { Router } from "express";
import { getAllCategory, getCategory } from "../controllers/CategoryControoler";
import { createSubCategory, DeleteSubCategory, getAllSubCategory, GetSubCategory, UpdateSubCategory } from "../controllers/SubCategoryController";

const SubCategoryRouter:Router = Router()

// Get All SubCategory
SubCategoryRouter.get("/", getAllSubCategory)
// Get A SubCategory
SubCategoryRouter.get("/:id", GetSubCategory)
// create a SubCategory
SubCategoryRouter.post("/", createSubCategory)
// Delete A SubCategory
SubCategoryRouter.delete("/:id", DeleteSubCategory)
// Update A SubCategory
SubCategoryRouter.put("/:id", UpdateSubCategory)

export default SubCategoryRouter