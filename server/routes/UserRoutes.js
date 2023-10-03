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

export default UserRoute;