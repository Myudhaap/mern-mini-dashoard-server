import { Response } from "../dto/resDto.js"
import categoryService from "../services/categoryService.js"
import productService from "../services/productService.js"

const productController = () => {
    const getAll = async (req, res) => {      
      try{
            const products = await productService().getAll()

            res.status(200).json(new Response(200, "Successfully", products))
        }catch(e){
            console.log(e)
            res.status(e.statusCode || 500).json({message: e.message})
        }
    }

    const getById = async (req, res) => {
        const {id} = req.params
        try{
            const category = await productService().getById(id)

            res.status(200).json(new Response(200, "Successfully", category))
        }catch(e){
            console.log(e)
            res.status(e.statusCode || 500).json({message: e.message})
        }
    }

    const create = async (req, res) => {
        req.body.imageUrl = req.file.path
        req.body.imageId = req.file.filename
        try{
            const product = await productService().create(req.body)

            res.status(201).json(new Response(201, "Successfully", product))
        }catch(e){
            console.log(e)
            res.status(e.statusCode || 500).json({message: e.message})
        }
    }

    const update = async (req, res) => {
        req.body.imageUrl = req.file.path
        req.body.imageId = req.file.filename

        try{
            const product = await productService().update(req.body)

            res.status(200).json(new Response(200, "Successfully", product))
        }catch(e){
            console.log(e)
            res.status(e.statusCode || 500).json({message: e.message})
        }
    }

    const deleteProduct = async (req, res) => {
        const {id} = req.params
        try{
            const product = await productService().deleteProduct(id)

            res.status(200).json(new Response(200, "Successfully", product))
        }catch(e){
            console.log(e)
            res.status(e.statusCode || 500).json({message: e.message})
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

export default productController