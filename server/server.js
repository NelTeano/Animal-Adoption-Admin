// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";
import cors from 'cors';

// ROUTES 
import UserRoute from './routes/UserRoutes.js'
import InquiriesRoute from './routes/InquiriesRoutes.js';

// DATABASE CONNECTION
import { initDatabase } from './database.js'

dotenv.config(); 
initDatabase();
const app = express();
const PORT = 5176;

app.use(cors({
    origin: ['http://localhost:5175','http://localhost:5175']  // THE HTTP(ORIGIN) THAT WILL ALLOW TO ACCESS THE ROUTES
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
app.use('/api', InquiriesRoute)