// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";
import cors from 'cors';


// ROUTES 
import UserRoute from './routes/UserRoutes.js';
import InquiriesRoute from './routes/InquiriesRoutes.js';
import AuthenticationRoute from './routes/Authenticate.js';
import AnimalsRoute from "./routes/AnimalRoutes.js";

// DATABASE CONNECTION
import { initDatabase } from './database.js'

dotenv.config();     // INITIALIZE .ENV 
initDatabase();     // ACTIVATE DB CONNECTION


// VARIABLES
const app = express();
const PORT = 5176;


app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5173']  // THE HTTP(ORIGIN) THAT WILL ALLOW TO ACCESS THE ROUTES
}));

// ACTIVATE SERVER PORT 
app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));




// USE ROUTES
app.use('/api', UserRoute);
app.use('/api', InquiriesRoute);
app.use('/api', AnimalsRoute)
app.use('/api', AuthenticationRoute);



















