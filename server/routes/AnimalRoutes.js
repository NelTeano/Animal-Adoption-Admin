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

// GET ONE ANIMAL DATA BY ID
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

// CREATE NEW ANIMAL TO ADOPT
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

// DELETE ANIMAL USING MATCH NAME && LASTOWNER
AnimalRoutes.delete('/animals/delete/:name/:last_owner', async (req, res)=>{
    const animalName = req.params.name;
    const animalOwner = req.params.last_owner;

    try {
    
    const deletedAnimal = await AnimalModel.findOneAndRemove({ name: animalName, last_owner: animalOwner });
    
    if (!deletedAnimal) {
        console.log(animalName, animalOwner );
        return res.status(404).json({ message: 'Animal not found' });
    }
    
    console.log('Successfully deleted a Animal');
    res.json({ message: 'Animal deleted successfully', deletedAnimal });
    } catch (error) {
    console.error('Error deleting Animal:', error);
    res.status(500).json({ message: 'Delete User Request Failed', error });
    }
});

// MANIPULATE DATA OF ANIMAL
AnimalRoutes.put('/animals/edit/:name', async (req, res)=>{
    const nameOfAnimal = req.params.name; // GET THE USER INPUT NAME THAT IT WANTS TO EDIT

    const formData = {
        name: req.body.EditName,
        breed: req.body.EditBreed,
        age: req.body.EditAge,
        location: req.body.EditLocation,
        last_owner: req.body.EditLast_Owner,
        new_owner: req.body.EditNew_Owner,
        isAdopted: req.body.EditisAdopted,
        animal_type: req.body.EditType,
        animal_image: req.body.EditImage
    };

    try {

        const existingData = await AnimalModel.findOne({ name: nameOfAnimal });

        if (!existingData) {
            return res.status(404).json({ message: 'Animal not found' });
        }

        const updatedData = {
            ...existingData.toObject(),
            ...formData,
        };

        await AnimalModel.findByIdAndUpdate(existingData._id, updatedData);
        res.json({ message: 'Animal updated successfully', updatedData, oldData: existingData});
    } catch (error) {
        console.error('Error updating Animal:', error);
        res.status(500).json({ message: 'Update Animal Request Failed', error });
    }
});





export default AnimalRoutes;