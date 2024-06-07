import app from "./app.js"
const PORT = process.env.PORT || 3000

const main = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    }catch(e){
        console.error(e)
    }
}

main()