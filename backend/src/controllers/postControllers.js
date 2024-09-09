// create post-controller

const Post = require("../models/postModels");
const { post } = require("../routes/postRoutes");

// const createPost =  async (req, res)=>{
//     try{
//         const post = new Post(req.body);
//         await post.save();
//         res.status(201).json({msg:"post uploaded"})

//     }catch (err){
//         res.status.json({msg:"server error", error:err.message});
//     }
// };


// update post-controller
const updatePost = async (req, res) => {

    try {
        const postId = req.params.id;
        const post = await Post.findByIdAndUpdate(postId, req.body, { new: true, runValidators: true });
        
        if (!post) {
            return res.status(404).json({ msg: 'Post is not found' }); // Properly handles the not found case
        }
        
        res.status(200).send(post);
    } catch (error) {
        res.status(400).json({ msg:"server  error",  });
    }
};
// get post controllers

const getPostById = async (req, res) => {
    try {
        const postId = req.params.id;    
        const post = await Post.findById(postId);      
        if (!post) {
            return res.status(404).json({ msg: 'Post is not found' }); 
        }
        
        res.status(200).json(post); 
    } catch (error) {
        res.status(400).json({ msg: 'Invalid ID format', error: error.message }); 
    }
 };

//  delete controller
const deletePost = async (req, res) => {
    try {
        const postId = req.params.id; // Extract the ID from the request parameters
        const post = await Post.findByIdAndDelete(postId); // Find and delete the post by ID
        
        if (!post) {
            return res.status(404).json({ msg: 'Post is not found' }); // Handle case where post is not found
        }

        res.status(200).json({ msg: 'Post deleted successfully', post }); // Confirm deletion
    } catch (error) {
        res.status(400).json({ msg: 'Invalid ID format', error: error.message }); // Handle errors, like invalid ID format
    }
};

module.exports = {updatePost, getPostById, deletePost};