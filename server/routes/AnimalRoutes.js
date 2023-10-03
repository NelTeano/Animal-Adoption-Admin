import express from 'express';

// MODELS
import AnimalModel from '../models/Animal.js'

const AnimalRoutes = express.Router();

// GET ALL ANIMALS  
AnimalRoutes.get("/animals" , async (req, res)=>{

    
    try {
        const getAllAnimals = await AnimalModel.find({});
        res.send(getAllAnimals);
        console.log("Success sending the Animals Data");
    } catch (error) {
        res.status(500).json({ message: "Error Getting Account Data" , error });
    }
});




export default AnimalRoutes;