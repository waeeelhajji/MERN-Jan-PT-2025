import express from "express"
import dbConnect from "./config/mongo.config.js"
import router from "./routes/cake.route.js"


const app = express()
const PORT = 5000

app.use(express.json())
app.use("/api", router)

dbConnect()

app.listen(PORT, () => {
    console.log(`>>>>>>>> Listening on port: ${PORT}`)
})