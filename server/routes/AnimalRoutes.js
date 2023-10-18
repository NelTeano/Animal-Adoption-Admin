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


AnimalRoutes.post('/animals', async (req, res)=>{

    const NewAnimal = new AnimalModel({
        name: req.body.AnimalName,
        breed: req.body.AnimalBreed,
        age: req.body.AnimalAge,
        location: req.body.AnimalLocation,
        last_owner: req.body.AnimalOwner,
        isAdopted : false,
        new_owner: "",
        animal_type: req.body.AnimalType,
        animal_image: req.body.AnimalImage,
    });

    try {
        
        const createAnimal = await NewAnimal.save();
        res.send(createAnimal);
        console.log("Successfully Create a Animal");

    } catch (error) {
        res.status(500).json({ message: "Create User Request Failed" , error });
    }


});


// AnimalRoutes.delete('', async (req, res)=>{
    
// });


// AnimalRoutes.put('', async (req, res)=>{
    
// });





export default AnimalRoutes;