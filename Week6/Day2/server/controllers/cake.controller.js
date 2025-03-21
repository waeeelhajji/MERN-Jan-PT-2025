//? controller ?
//! CRUD
//! LOGIC
//! Functions
//!------------------MODEL
import Cake from "../models/cake.model.js"


const CakeController = {
    //! -------------------- CREATE
    create: async (req, res) => {
        try {
            const newCake = await Cake.create(req.body);
            res.json(newCake)
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    },
    //! -------------------- READ ALL
    readAll: async (req, res) => {
        try {
            const ALLCakes = await Cake.find();
            res.json(ALLCakes)
        }
        catch (error) {
            console.log(error)
            res.json(error)
        }
    },
    //! -------------------- READ ONE
    readOne: async (req, res) => {
        try {
            const foundCake = await Cake.findById(req.params.id);
            res.json(foundCake)
        }
        catch (error) {
            console.log(error)
            res.json(error)
        }
    },
    //! -------------------- Update
    update: async (req, res) => {
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const updatedCake = await Cake.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(updatedCake)
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    },

    //! -------------------- delete
    delete: async (req, res) => {
        try {
            const deletedCake = await Cake.findByIdAndDelete(req.params.id)
            res.json(deletedCake)
        }
        catch (error) {
            console.log(error)
            res.json(error)
        }
    }
}








export default CakeController







