import { Response } from "../dto/resDto.js"
import authService from "../services/authService.js"

const {login, register} = authService()

const authController = () => {
    /*
        BODY = {
            email string
            password password
        }
    */
    const loginUser = async (req, res) => {
        const {email, password} = req.body
        try{
            const token = await login({email, password})

            res.status(200).json(new Response(200, "Login successfully", {token}))
        }catch(e){
            console.log(e)
            res.status(e.statusCode || 500).json({message: e.message})
        }
    }

    /*
        BODY = {
            name string
            email string
            password string
        }
    */
    const registerUser = async (req, res) => {
        const {name, email, password} = req.body
        try{
            const user = await register({name, email, password})

            return res.status(201).json(new Response(201, "User successfully created", {user}))
        }catch(e){
            console.log(e)
            res.status(e.statusCode || 500).json({message: e.message})
        }
    }

    return {
        loginUser,
        registerUser
    }
}

export default authController