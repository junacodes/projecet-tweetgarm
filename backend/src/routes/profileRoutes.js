const express = require("express");
const{updateProfile,getProfile} = require("../controllers/profileController")
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();




/**
 * @description To update user profiles
 * @api /api/profile/update
 * @access private
 * @type put
 * @return response
 */



// get profile
/**
 * @description To update user profiles
 * @api /api/profile/get
 * @access private
 * @type get
 * @return response
 */

router.get("/get", authMiddleware, getProfile)

router.put('/update', authMiddleware, updateProfile)

module.exports = router;