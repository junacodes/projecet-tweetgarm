const Comment = require("../models/commentsModels");
const Post = require("../controllers/postControllers")


const createComments = async (res, req)=>{
    try {
        const { content, postId } = req.body;
        const userId = req.user.id; // Assume user is authenticated and user ID is available in req.user

        // Check if the post exists
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }


        const newComment = new Comment({
            content,
            user: userId,
            post: postId
        });

        await newComment.save();
        res.status(201).json({ msg: 'Comment created successfully', comment: newComment });
    } catch (error) {
        res.status(500).json({ msg: 'Error creating comment', error: error.message });
    }
};
 
module.exports = createComments
   