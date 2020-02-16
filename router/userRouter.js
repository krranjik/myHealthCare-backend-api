const express = require('express')
const router = express.Router();
const user = require('../controllers/userController');
const userAuth = require('../middleware/userAuth');
const upload = require('../middleware/uploadImage');

router.post("/registeruser", upload, user.registeruser)
router.get("/getallusers", user.getUser)
router.get("/finduserbyid/:_id", user.finduserById)
router.put("/updateuser/:_id", user.updateuser)
router.delete("/deleteuser/:_id", user.deleteuser)
router.post("/userlogin", user.userLogin)
router.get("/logout", userAuth, user.logout)

module.exports = router