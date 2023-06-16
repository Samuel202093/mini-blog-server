const express = require("express")
const cors = require("cors")
const dotenv =  require("dotenv")
const port = 4040 || process.env.PORT
const bodyParser = require("body-parser")
const routes = require("./routes/index")
const connection = require('./db/db')

const app = express()
dotenv.config()

//connecting to mongodb 
connection()


// initializing middlewares
app.use(cors())
app.use(bodyParser.json())

app.use('/', routes)


app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})


