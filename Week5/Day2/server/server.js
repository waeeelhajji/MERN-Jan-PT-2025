//&  ES5 const express = require('express')
import express from "express"
// console.log(express())
const app = express()


// -- MIDDLEWARE --
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());





// fake db
const users = [
    { firstName: "Reimu", lastName: "Hakurei", id: 0 },
    { firstName: "Marisa", lastName: "Kirisame", id: 1 },
    { firstName: "Sanae", lastName: "Kochiya", id: 2 },
    { firstName: "Sakuya", lastName: "Izayoi", id: 3 },
    { firstName: "Momiji", lastName: "Inubashiri", id: 4 }
];

//! --- ROUTING ---


//? READ ALL
//-------------------request:response
app.get("/api/users", (req, res) => {
    res.json(users)
    // console.log(req)
})

//? Create
app.post("/api/users", (req, res) => {
    console.log(req.body)
    users.push(req.body)

})






















































app.listen(5000, () => console.log("SERVER is up on port:5000 and is listening for REQuest to RESpond to"))