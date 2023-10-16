import express from 'express'

// SCHEMA MODEL
import UserModel from '../models/User.js'; 

const UserRoute = express.Router();

UserRoute.get('/users', async (req, res) => {

    try{
        const users = await UserModel.find({});
        res.send(users);
        console.log('Success sending the Users Data')
    }catch(err){
        res.status(500).json({ message: "Error Getting Users Data" , err });
    }
});

// CREATE A USER
UserRoute.post('/users', async (req, res) => {


    const NewUser = new UserModel({
        name: req.body.createName,
        email: req.body.createEmail,
        picture: req.body.createPicture,
        address: req.body.createAddress,
        isQualified: true,
        net_income: req.body.createIncome,
    });

    try {
        
        const createUser = await NewUser.save();
        res.send(createUser);
        console.log("Successfully Create a User");

    } catch (error) {
        res.status(500).json({ message: "Create User Request Failed" , error });
    }
});

// DELETE USER USING PARAMS TO CHOOSE
UserRoute.delete('/users/delete/:name/:email', async (req, res) => {
    const name = req.params.name; 
    const email = req.params.email;

    try {
    
    const deletedUser = await UserModel.findOneAndRemove({ name, email });

    if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    console.log('Successfully deleted a user');
    res.json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Delete User Request Failed', error });
    }
});


// EDIT USER DATA WIHOUT AFFECTING OTHER DATA THAT YOU DID NOT FILL-IN
UserRoute.put('/users/edit/:name', async (req, res) => {
    
    const nameOfUser = req.params.name; // GET THE USER INPUT NAME THAT IT WANTS TO EDIT

    const formData = {
        name: req.body.EditName,
        email: req.body.EditEmail,
        picture: req.body.EditPicture,
        address: req.body.EditAddress,
        isQualified: req.body.EditQualified,
        net_income: req.body.EditIncome,
    };

    try {

        const existingData = await UserModel.findOne({ name: nameOfUser });

        if (!existingData) {
            return res.status(404).json({ message: 'User not found' });
        }

        const updatedData = {
            ...existingData.toObject(),
            ...formData,
        };

        await UserModel.findByIdAndUpdate(existingData._id, updatedData);
        res.json({ message: 'User updated successfully', updatedData, oldData: existingData});
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Update User Request Failed', error });
    }
})



export default UserRoute;