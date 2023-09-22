import mongoose from "mongoose";

const InquiriesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    messege:{
        type: String,
        required: true,
    }
})


const InquiriesModel = mongoose.model('Inquiries', InquiriesSchema);

export default InquiriesModel;