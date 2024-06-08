import CustomException from "../exceptions/ErrorException.js"
import { User } from "../models/User.js"

const userService = () => {
    /*
        PAYLOAD = {
            queryParams object
        }
    */
    const getAll = (payload) => {

    }

    
    const getById = async (id) => {
        try{
            const user = await User.findById(id)

            if(!user) throw new CustomException("User not found", 404)

            return user
        }catch(e){
            throw e
        }
    }

    /*
        PAYLOAD = {
            id? string
            name? string
            email? string
        }
    */
    const getBy = async (payload) => {
        try{
            console.log(payload)
            const user = await User.findOne(payload)

            if(!user) throw new CustomException("User not found", 404)

            return user
        }catch(e){
            throw e
        }
    }

    /*
        PAYLOAD = {
            id? string
            name? string
            email? string
        }
    */
    const get = async (payload) => {
        try{
            const user = await User.find(payload)

            if(!user) throw new CustomException("User not found", 404)

            return user
        }catch(e){
            throw e
        }
    }

    /*
        PAYLOAD = {
            name string
            email string
            password string
            role string
        }
    */
    const create = (payload) => {

    }

    /*
        PAYLOAD = {
            id string
            name string
            email string
            password string
            role string
        }
    */
    const update = (payload) => {

    }

    const deleteUser = (id) => {

    }

    return {
        getAll,
        getById,
        getBy,
        get,
        create,
        update,
        deleteUser
    }
}

export default userService