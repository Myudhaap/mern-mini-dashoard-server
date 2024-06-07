import express from "express";
import categoryController from "../controllers/categoryController.js";

const {
    getAll,
    getById,
    create,
    update,
    deleteCategory
} = categoryController()
const router = express.Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/", create)
router.put("/", update)
router.delete("/:id", deleteCategory)

export default router