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
        const user = await AccountModel.find({ username: username });

        if (user.length === 0) {
            // User not found
            res.status(404).json({ message: "User not found" });
            return; // Return early to avoid further execution
        }

        console.log('Success: Found user', user[0].username);

        if (username === user[0].username && password === user[0].password) {
            console.log(true);
            res.status(200).json({ message: "Login successful" });
        } else {
            console.log(false);
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});




export default AuthRoute