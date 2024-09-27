const express = require("express")
const router = express.Router()
const Markedonse = require("../Models/Markedones.js")


router.post("/postattend"  , async (req , res) => {

    try {
        const { timestamp } = req.body;
        const newAttendance = new Markedonse({ timestamp });
    
        await newAttendance.save();
        res.status(200).json({ message: 'Attendance marked successfully', attendance: newAttendance });
      } catch (error) {
        res.status(500).json({ message: 'Error marking attendance', error });
        console.log(error) 
      } 

})





router.get("/getattend" , async(req , res) => {
    try {
        const attendanceRecords = await Markedonse.find().sort({ timestamp: -1 }); // Fetch and sort by timestamp (most recent first)
        res.status(200).json(attendanceRecords);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching attendance records', error });
      }
})











module.exports = router