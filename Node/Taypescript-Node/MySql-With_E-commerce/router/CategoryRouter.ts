import { Router } from "express";
import { CreateCategory, deleleCategory, getAllCategory, getCategory, updateCategory } from "../controllers/CategoryControoler";

const categoryRouter: Router = Router()

// Get All Category
categoryRouter.get("/", getAllCategory)
// Get a Category
categoryRouter.get("/:id", getCategory)
// Create a Product
categoryRouter.post("/", CreateCategory)
// Update a Product
categoryRouter.put("/:id", updateCategory)
// Delete A Product
categoryRouter.delete("/:id", deleleCategory)

export default categoryRouter