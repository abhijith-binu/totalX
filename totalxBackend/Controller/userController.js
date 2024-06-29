// import model
const users = require('../model/userSchema')


// register
exports.register= (req, res) => {
    console.log(req.file);
    const file = req.file.filename
    const {fname,lname,mobile} = req.body
     if(!fname || !lname || !mobile){
        res.status(403).json("All inputs are required")
     }
}