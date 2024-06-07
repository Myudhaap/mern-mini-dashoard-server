import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { authRouter, cartRouter, categoryRouter, productRouter, userRouter } from "./routes/index.js"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/carts", cartRouter)

export default app