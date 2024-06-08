import { Response } from "../dto/resDto.js"
import authService from "../services/authService.js"
import jwt from "jsonwebtoken"

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

    const verifyToken = (req, res) => {
        let token = req.headers['authorization'];
      
        if (!token) {
          return res.status(401).json({ message: 'Token is required' });
        }

        token = token.substring(7)

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
          if (err) {
            return res.status(401).json({ message: 'Invalid token' });
          }
      
          res.status(200).json({message: "Valid token"})
        });
      };

    return {
        loginUser,
        verifyToken,
        registerUser
    }
}

export default authController