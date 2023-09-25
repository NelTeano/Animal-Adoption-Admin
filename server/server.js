// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";
import cors from 'cors';


// ROUTES 
import UserRoute from './routes/UserRoutes.js'
import InquiriesRoute from './routes/InquiriesRoutes.js';
import AuthenticationRoute from './routes/Authenticate.js'

// DATABASE CONNECTION
import { initDatabase } from './database.js'

dotenv.config();     // INITIALIZE .ENV 
initDatabase();     // ACTIVATE DB CONNECTION


// VARIABLES
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
app.use('/api', InquiriesRoute);
app.use('/api', AuthenticationRoute);





















// --------------------------------------------------------------------------------------------------PASSPORT SETUP

// import session from 'express-session'
// import passport from 'passport'
// import LocalStrategy from 'passport-local'

// // VARIABLES PASSPORT
// const localStrategy = LocalStrategy.Strategy


// // Configure session middleware
// app.use(session({
//     secret: 'session_super_secret_string', // Change this to a strong, random secret
//     resave: false,
//     saveUninitialized: false,
// }));

// // Initialize Passport
// app.use(passport.initialize());
// app.use(passport.session());


// --------------------------------------------------------------------------------------------------PASSPORT SETUP
