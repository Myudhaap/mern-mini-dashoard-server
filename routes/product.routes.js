import express from "express"
import multer from "multer"

import productController from "../controllers/productController.js"
import { storage } from "../utils/cloudinaryUtil.js"


const {
    getAll,
    getById,
    create,
    update,
    deleteProduct
} = productController()
const router = express.Router()

const upload = multer({storage: storage})

router.get("/", getAll)
router.get("/:id", getById)
router.post("/", upload.single('image'),create)
router.put("/", upload.single('image'), update)
router.delete("/:id", deleteProduct)

export default router