const mongoose = require("mongoose")

const Attendanceschema = mongoose.Schema({
    lati : {
        type : Number,
        required : true
    },
    longi : {
        type : Number,
        required : true
    },
})



module.exports = mongoose.model("attendance" , Attendanceschema)