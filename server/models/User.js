import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },  
    picture: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    net_income: {
        type: String,
        required: true,
    },
    isQualified: {
        type: Boolean,
        default: false
    },
    isAlreadyFillup: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const UserModel = new mongoose.model('User', UserSchema);

export default UserModel