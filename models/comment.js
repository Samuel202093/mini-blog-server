const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema

const commentSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: [true, 'Please Enter post title'],
        trim: true,
        unique: true        
    },
    userId:{
        type: ObjectId,
        ref: "User"
    },
    comment: {
        type: String,
        required: [true, 'Please Enter your comment'],
        trim: true,
    },
  
}, {timestamps: true})


const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment