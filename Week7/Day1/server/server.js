import express from "express"
import dbConnect from "./config/mongo.config.js"
import router from "./routes/cake.route.js"
import dotenv from "dotenv"

dotenv.config()




const app = express()
const PORT = process.env.PORT
dbConnect()


app.use(express.json())
app.use("/api", router)


app.listen(PORT, () => {
    console.log(`>>>>>>>> Listening on port: ${PORT}`)
})