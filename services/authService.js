import erole from "../enum/roleEnum.js";
import CustomException from "../exceptions/ErrorException.js";
import { User } from "../models/User.js";
import userService from "./userService.js"

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userServices = userService();

const authService = () => {
    /*
        PAYLOAD = {
            username string
            password string
        }
    */
    const login = async (payload) => {
        const {email, password} = payload

        try{
            const user = await userServices.getBy({email})
            console.log(user)
            
            if(!user && !(await bcrypt.compare(password, user.password))){
                throw new CustomException("Invalid email or password", 401)
            }

            const token = jwt.sign(
                {
                    userId: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn: "1h"
                }
            )

            return token
        }catch(e){
            throw e
        }
    }

    /*
        PAYLOAD = {
            name string
            email string
            password string
        }
    */
    const register = async (payload) => {
        const {name, email, password} = payload

        const hashPassword = await bcrypt.hash(password, 10)

        try{
            const user = new User({
                name,
                email,
                password: hashPassword,
                role: erole.CUSTOMER,
                isActive: true,
            })

            await user.save()

            return user
        }catch(e){
            throw e
        }
    }

    return {
        login,
        register
    }
}

export default authService