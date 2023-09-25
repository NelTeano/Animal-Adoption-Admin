import express from 'express'

// MODELS
import AccountModel from '../models/Account.js'


const AuthRoute = express.Router();

AuthRoute.get('/accounts', async (req, res) => {

    try {
        const accounts = await AccountModel.find({})
        res.send(accounts)
        console.log('Successful getting accounts data');
    } catch (error) {
        res.status(500).json({ message: "Error Getting Account Data" , error });
    }
})





// TESTING LOGIN (not working yet)
AuthRoute.post('/accounts', async (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;


    try {
        const user = await AccountModel.find({ username : username});
        res.send(user)
        console.log('success gets the user', user[0].username)

        if(username == user[0].username && password == user[0].password){
            console.log(true)
        }else{
            console.log(false)
        }
    } catch (error) {
        res.status(500).json({ message: "Error Login :" , error });
    }
})





export default AuthRoute