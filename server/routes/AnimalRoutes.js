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
        res.status(500).json({ message: "Error Getting Animals Data" , error });
    }
});

AnimalRoutes.get("/animals/:id", async (req, res) =>{

    try {
        const animalId = req.params.id;
        const getAnimalDetails = await AnimalModel.findById(animalId);
        if(getAnimalDetails == ''){
            console.log("Cant Find Animal : ", animalId);
        }else{
            res.send(getAnimalDetails);
            console.log("Success sending Animal ID : ", animalId)
        }
    } catch (error) {
        res.status(500).json({ message: "Error Getting Animals Data" , error });
    }
})




export default AnimalRoutes;