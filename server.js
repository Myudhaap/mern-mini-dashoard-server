import app from "./app.js"
import prisma from "./models/index.js"
const PORT = process.env.PORT || 3000

const main = async () => {
    try{
        await prisma.$connect();
        console.log("Connected to the database")

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    }catch(e){
        console.error(e)
    }
}

main()