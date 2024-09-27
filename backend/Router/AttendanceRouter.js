const express = require("express")
const router = express.Router()
const attendance  = require("../Models/Attendancemodel.js")



router.post("/post"  , async (req , res) => {
    try {
        const {longi , lati} =await  req.body
    const attend = await new attendance({
        lati,
        longi
    })
    await attend.save()
    res.json(attend)
    console.log(attend)


    } catch (error) {
        console.log(error)
    }

})


router.get("/get" , async(req , res) => {
    try {
        const alldata = await attendance.findOne()
    console.log(alldata)
    res.json(alldata)
    } catch (error) {
        console.log(error)
    }
})









module.exports = router