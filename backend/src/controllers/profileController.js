const Profile = require("../models/profileModels")
const { default: mongoose } = require("mongoose");



  const updateProfile = async(req, res)=>{
    try{
       const userId = req.user.id
       const profile = await Profile.findOne({user:userId})
       if(!profile){
          return res.status(400).json({msg:"profile is not found"})
       }
       const { firstName, phone,  address } = req.body;
       // const updateProfile = await Profile.updateOne(user.id)
       
       const  profileUpdate = await Profile.updateOne({user:userId}, {
          firstName: firstName? firstName:profile.firstName,
          phone: phone? phone:profile.phone,
          address: address? address:profile.address
 
 
       })
     return  res.status(200).json({msg:" profile is updated", profileUpdate})
    }
    catch(err){
      return res.status(500).json({msg:"server error", error:err.message});
       }
    }

//  get profile
    const getProfile= async (req, res) =>{
        try{
           const userId= req.user.id
           const profile = await Profile.findOne({ user: userId }).populate("user",['name','email','userRole']);
           if(!profile){
              return res.status(404).json({msg:"profile is not found"})
           }
           return res
              .status(200)
              .json({ msg: "profile fetched successfully", profile });
        
        }catch(err){
           return res.status(500).json({msg:"server error"}, err.message)
        }
           }



  module.exports ={ updateProfile, getProfile}