// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";

// DATABASE CONNECTION
import { initDatabase } from './database.js'

dotenv.config(); 
initDatabase();
const app = express();
const PORT = 5175;



// ACTIVATE SERVER PORT 
app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// USE ROUTES