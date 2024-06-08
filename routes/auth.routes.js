import express from "express"
import authController from "../controllers/authController.js"

const {loginUser, registerUser, verifyToken} = authController()
const router = express.Router()

router.post("/login", loginUser)
router.post("/register", registerUser)
router.get("/verify", verifyToken)

export default router