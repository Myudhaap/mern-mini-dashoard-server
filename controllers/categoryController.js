import { Response } from "../dto/resDto.js"
import categoryService from "../services/categoryService.js"

const categoryController = () => {
    const getAll = async (req, res) => {      
      try{
            const categories = await categoryService().getAll()

            res.status(200).json(new Response(200, "Successfully", categories))
        }catch(e){
            console.log(e)
            res.status(e.statusCode || 500).json({message: e.message})
        }
    }

    const getById = async (req, res) => {
        const {id} = req.params
        try{
            const category = await categoryService().getById(id)

            res.status(200).json(new Response(200, "Successfully", category))
        }catch(e){
            console.log(e)
            res.status(e.statusCode || 500).json({message: e.message})
        }
    }

    const create = async (req, res) => {
        try{
            const category = await categoryService().create(req.body)

            res.status(201).json(new Response(201, "Successfully", category))
        }catch(e){
            console.log(e)
            res.status(e.statusCode || 500).json({message: e.message})
        }
    }

    const update = async (req, res) => {
        try{
            const category = await categoryService().update(req.body)

            res.status(200).json(new Response(200, "Successfully", category))
        }catch(e){
            console.log(e)
            res.status(e.statusCode || 500).json({message: e.message})
        }
    }

    const deleteCategory = async (req, res) => {
        const {id} = req.params
        try{
            const category = await categoryService().deleteCategory(id)

            res.status(200).json(new Response(200, "Successfully", category))
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
        deleteCategory
    }
}

export default categoryController