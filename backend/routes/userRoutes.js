const express = require('express')
const router = express.Router()
const user = require('../modal/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secretkey = "jaghcuecgcb7k878790n3i78937^$&*bhjhdycu";

router.post('/register', async (req, res)=>{
    try{
        const {name , email, password} = req.body;
        if(!name || !email || !password) return res.status(400).json({status:false, message:"All files are require"})

            const existingUser = await user.findOne({email})
            if(existingUser) return res.status(400).json({status:false, message: "email already registered"})

            const hashPassword = await bcrypt.hash(password, 10)


            const newuser = new user({name , email, password: hashPassword});
            await newuser.save();    


        return res.status(201).json({status: false, message:"User registered successfully "})
    }catch (error){

        return res.status(400).json({status: false, message:"something went wrong", error: error.message})

    }
})

router.post('/login', async (req, res)=>{
    try{
        const {email, password} = req.body;
        if( !email || !password) return res.status(400).json({status:false, message:"All files are require"})

        const User = await user.findOne({email})

        if(!User || !(await bcrypt.compare(password, User.password))){
            return res.status(400).json({status: true, message: "Invalid credantial"})
        }

        const token  = jwt.sign({id:user._id, email:user.email}, secretkey, {expiresIn: '1hr'})


        return res.status(200).json({status: true, message:"Login succesfully", token : token })
    }catch (error){

        return res.status(400).json({status: false, message:"something went wrong", error: error.message})

    }
})

router.post('/profile', async (req, res)=>{
    try{
      const token = req.headers?.authorization?.split(' ')[1];
      if(!token) return res.status(400).json({status: false, message: "access denied"})

        jwt.verify(token, secretkey, async(err, decode)=>{
            const user = await user.findById(decode?.id)
            if(!user) return res.status(400).json({status:false, message:"invalid token "})
                const userdata = {
                    id: user?.id,
                    name: user?.name,
                    email: user?.email
            }
            return res.status(200).json({status: true, message:"profile data", data: userdata })
        })


        
    }catch (error){

        return res.status(400).json({status: false, message:"something went wrong", error: error.message})

    }
})

module.exports = router;