const mongoose = require("mongoose")
// const schema = mongoose.schema;
const profileSchema = new mongoose.Schema(
    {
        user:{
            type : mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        firstName: {
            type:String,
            
        },
   

        phone: {
            type:String
        },

        address:{
            type:String,
            

        },
        
       
        userRole:{
            type:String,
            enum : ["user", "admin", "superAdmin"],
            required: true,
            default: "user",
        }
    },
        {
            timestamps:true
        }

    
);
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile
