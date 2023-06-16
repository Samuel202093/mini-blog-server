const User = require("../models/user")
const dotenv = require("dotenv").config()
const Comment = require("../models/comment")
const bcrypt = require('bcrypt')




exports.createUser = async(req, res)=>{
    try {
        const {username, email, password} = req.body
        if (!(username && email && password)) {
            return res.status(400).send({error: error.message || "Please Enter the required fields"})
        }

        const user = new User({
            username: username,
            email: email, 
            password: password
        })

        const salt = await bcrypt.genSalt(10)

        const hashPassword = await bcrypt.hash(user.password, salt)

        user.password = hashPassword
        const newUser = await user.save()
        res.status(200).send(newUser)
    } catch (error) {
        res.status(500).send( "Server Error")
    }
}


exports.loginUser = async(req, res)=>{
    try {
        const { email, password} = req.body
        const user = await User.findOne({email: email})
        if (user) {
            res.status(200).send(user)
        }else{
            res.status(400).send({error: error.message || "please enter your Email and Password"})
        }
    } catch (error) {
        res.status(500).send({error: error.message || "Server Error"})
    }
}

exports.createComment = async(req, res)=>{
    try {
        const {postTitle, comment} = req.body
        const userComment = new Comment({
            postTitle,
            userId: req.params.id,
            comment
        })
        const newComment = await userComment.save()
        res.status(200).send(newComment)
    } catch (error) {
        res.status(500).send({error: error.message || "Server Error"})
    }
}

exports.Comment = async(req, res)=>{
    try {
        const result = await Comment.findOne({postTitle: req.params.title}).populate("userId")
        if (result) {
            res.status(200).send(result)
        }
    } catch (error) {
        res.status(500).send({error: error.message || "Server Error"})
    }
}