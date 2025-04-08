import { connect } from "mongoose";
import dotenv from "dotenv"

dotenv.config()


const Mong_URI = process.env.Mong_URI

const dbName = process.env.dbName

async function dbConnect() {
    try {
        await connect(Mong_URI, {
            dbName
        })
        console.log(`📡📡📡You successfully connected to ${dbName} DB!`)
    } catch (error) {
        console.log(error)
        throw error
    }
}


export default dbConnect



