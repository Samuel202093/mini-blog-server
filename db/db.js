const mongoose = require('mongoose')

module.exports = ()=>{
    const connectionParams ={
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try{
        mongoose.connect(process.env.MONGO_URL, connectionParams)
        console.log('Database connected successfully');
    } 
    catch(error){
        console.log(error);
        console.log('Could not connect to database');
    }
}