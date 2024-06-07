import c from "cloudinary"
import {CloudinaryStorage} from "multer-storage-cloudinary"

import dotenv from "dotenv"
dotenv.config()

export const cloudinary = c.v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "uploads",
        allowed_formats: ["jpg", "png", "jpeg"]
    }
})