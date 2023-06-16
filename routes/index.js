const express = require("express")
const userController = require("../controllers/user")

const route = express.Router()


route.post("/register", userController.createUser)
route.post("/login", userController.loginUser)
route.post("/create/comment/:id", userController.createComment)
route.get("/comments/:title", userController.Comment)




module.exports = route