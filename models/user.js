const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please Enter your Username'],
        lowercase: true,
        trim: true,
        minLength: [5, 'Username is too short']
    },
    email: {
        type: String,
        required: [true, 'Please Enter your Email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please Enter your Password'],
        minLength: [6, 'Username is too short'],
        maxLength: 70
    }
}, {timestamps: true})


const User = mongoose.model("User", userSchema)

module.exports = User