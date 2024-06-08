import CustomException from "../exceptions/ErrorException.js"
import { Category } from "../models/Category.js"

const categoryService = () => {
    const getAll = async () => {
        try{
            const categories = await Category.find({
                isActive: true
            })

            return categories
        }catch(e){
            throw e
        }
    }

    
    const getById = async (id) => {
        try{
            const category = await Category.findById(id)

            if(!category) throw new CustomException("Category not found", 404)

            return category
        }catch(e){
            throw e
        }
    }

    /*
        PAYLOAD = {
            name string
        }
    */
    const create = async (payload) => {
        try{
            const category = new Category({
                ...payload,
                isActive: true
            })

            await category.save()

            return category
        }catch(e){
            throw e
        }
    }

    /*
        PAYLOAD = {
            id string
            name string
        }
    */
    const update = async (payload) => {
        try{
            const categoryExist = await getById(payload.id)

            categoryExist.name = payload.name

            const category = await Category.findByIdAndUpdate(
                categoryExist._id,
                {
                    name: categoryExist.name,
                },
                {new: true}
            )

            return category
        }catch(e){
            throw e
        }
    }

    const deleteCategory = async (id) => {
        try{
            const categoryExist = await getById(id)

            categoryExist.isActive = false

            const category = await Category.findByIdAndUpdate(
                categoryExist._id,
                {
                    isActive: false,
                },
                {new: true}
            )

            return category
        }catch(e){
            throw e
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

export default categoryService