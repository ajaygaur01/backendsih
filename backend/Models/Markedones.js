const mongoose  = require("mongoose")


const MarkedonseSchema = mongoose.Schema({


username : {
type: String
},

   

} ,{timestamps : true})



module.exports = mongoose.model("markedattendance"   ,  MarkedonseSchema)