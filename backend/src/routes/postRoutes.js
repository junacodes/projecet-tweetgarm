const express = require("express");
const { updatePost, getPostById,deletePost} = require("../controllers/postControllers");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
// router.post("/create", createPost);



/**
 * @description To update post
 * @api /api/post/update
 * @access private
 * @type put
 * @return response
 */
router.put('/:id', authMiddleware, updatePost)


/**
 * @description To get post
 * @api /api/post/get
 * @access private
 * @type get
 * @return response
 */
router.get('/:id', authMiddleware, getPostById);

router.delete('/delete', authMiddleware, deletePost)

module.exports = router;