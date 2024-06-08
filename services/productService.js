import CustomException from "../exceptions/ErrorException.js"
import { Product } from "../models/Product.js"
import { cloudinary } from "../utils/cloudinaryUtil.js"

const productService = () => {
    const getAll = async () => {
        try{
            const products = await Product.find({
                isActive: true
            })

            return products
        }catch(e){
            throw e
        }
    }

    
    const getById = async (id) => {
        try{
            const product = await Product.findById(id)

            if(!product) throw new CustomException("Product not found", 404)

            return product
        }catch(e){
            throw e
        }
    }

    /*
        PAYLOAD = {
            name string
            description string
            price int
            imageUrl string
            categoryId string
        }
    */
    const create = async (payload) => {
        try{
            const product = new Product({
                ...payload
            })

            await product.save()

            return product
        }catch(e){
            throw e
        }
    }

    /*
        PAYLOAD = {
            id string
            name string
            description string
            price int
            imageUrl string
            categoryId string
        }
    */
    const update = async (payload) => {
        try{
            const productExists = await getById(payload.id)
            const public_id = productExists.imageId

            productExists.name = payload.name
            productExists.description = payload.description
            productExists.price = payload.price
            productExists.imageUrl = payload.imageUrl
            productExists.imageId = payload.imageId
            productExists.categoryId = payload.categoryId

            const product = await Product.findByIdAndUpdate(
                productExists._id,
                {
                    name: productExists.name,
                    description: productExists.description,
                    price: productExists.price,
                    imageUrl: productExists.imageUrl,
                    imageId: productExists.imageId,
                    categoryId: productExists.categoryId

                },
                {new: true}
            )

            await cloudinary.uploader.destroy(public_id)

            return product
        }catch(e){
            throw e
        }
    }

    const deleteProduct = async (id) => {
        try{
            const productExist = await getById(id)

            const product = await Product.findByIdAndUpdate(
                productExist._id,
                {
                    isActive: false,
                },
                {new: true}
            )

            await cloudinary.uploader.destroy(product.imageId)

            return product
        }catch(e){
            throw e
        }
    }

    return {
        getAll,
        getById,
        create,
        update,
        deleteProduct
    }
}

export default productService