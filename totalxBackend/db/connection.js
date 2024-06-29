const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString,{
  useUnifiedTopology:true,
  useNewUrlParser:true  
}).then(()=>{
    console.log('mongodb atlas connected successfully..');
}).catch((error)=>{
    console.log("Mongoose connection error :",error);
})