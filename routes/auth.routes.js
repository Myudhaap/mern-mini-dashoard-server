import express from "express"
// import authController from "../controllers/authController.js"
import authController from "../controllers/authController.js"

const {loginUser, registerUser} = authController()
const router = express.Router()

router.post("/login", loginUser)
router.post("/register", registerUser)

export default router