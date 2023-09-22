import express from 'express'

// MODEL 
import InquiriesModel from '../models/Inquries.js'

const InquriesRoute = express.Router();

InquriesRoute.get('/inquiries', async (req, res) => {
    try {
        const inquiries = await InquiriesModel.find({})
        res.send(inquiries)
        console.log("Success sending Inquiries Data")
    } catch (error) {
        res.status(500).json({ message: "Error Getting Inquiries Data" , error });
    }
})

export default InquriesRoute;