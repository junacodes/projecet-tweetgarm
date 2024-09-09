


// controller for create user registration
const User= require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Profile = require("../models/profileModels");

const userRegister = async (req, res) => {
    const data = req.body;
    // const name = data.name
if(!data.email || !data.password){
   return res.status(400).json({msg:"please enter your email and password"});
};
try {
    const user = await User.findOne({ email: data.email });
    if (user) {
       return res.status(400).json({ msg: "User already exists" });
    }
    const newUser = new User({
      name: data.name,
      email: data.email,
      password: data.password,
      userRole: data.userRole,
    });
  
    const newProfile = new Profile({
      user:newUser._id
    })
     
    const profileResponse = await newProfile.save()

    const response = await newUser.save();
    return res.status(201).json({msg: "user registered successfully  ", user: response });


 }

 catch(err){
    console.log(err);
    res.status(500).json({msg:"server error", error: err})
 }
};


// controller for user login
const loginUser = async (req, res) => {
   const { email, password } = req.body;
   // const data=req.body;
   // const email=data.email;
   // const password=data.password;
 
   try {
     let user = await User.findOne({ email });
      
     if (!user) {
       return res.status(400).json({ msg: "Invalid credentials" });
     }
 
     const isMatch = await bcrypt.compare(password, user.password);
 
     if (!isMatch) {
       return res.status(400).json({ msg: "Invalid credentials" });
     }
 
     const payload = {
       user: {
         id: user.id,
       },
     };
 
     jwt.sign( 
       payload,
       process.env.JWT_SECRET,
       { expiresIn: "1h" },
       (err, token) => {
         if (err) throw err;
         res.status(200).json({
           msg: "user logged in successfully",
           token: `${token}`,
           user: user,
         });
       }
     );
   } catch (error) {
     return res.status(400).json({ msg: "Unable to login", error });
   }
 };
 
 module.exports = { userRegister, loginUser };


 