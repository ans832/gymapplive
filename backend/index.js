const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { config } = require('dotenv');
const { sendEmail } = require('./utils/sendEmail.js');
const path = require('path');

const app = express();

app.use(express.json())
const userRoute = require("./routes/userRoutes.js")
config({path: "./config.env"});



app.use(cors({
    origin: true,
    credentials: true
}))




app.post("/send/mail", async(req,res,next)=>{

    const{name, email,message} = req.body;
    
    if(!name || !email || !message){
        return next(
            res.status(400).json({
                success: false,
                message: "please provide all details",
            })
        )
    }
    try {
        await sendEmail({
            email: "anshgupta911821@gmail.com",
            subject: "Gym website contact",
            message,
            userEmail: email
        })
        res.status(200).json({
            success:true,
            message: "message sent succesfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
        
    }
})
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
}) 

app.use('/user', userRoute)

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('db connected succesfully'))
.catch((err) => console.log('failed to connect', err))

app.listen(process.env.PORT);