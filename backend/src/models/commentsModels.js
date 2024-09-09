const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:'User',  

    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post',
        required: true
    }

})

module.exports = mongoose.model("Comment", commentSchema);