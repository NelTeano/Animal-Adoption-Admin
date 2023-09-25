import mongoose from "mongoose";

const userAccountSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    }
})


const accountSchema = mongoose.model('Accounts', userAccountSchema)

export default accountSchema