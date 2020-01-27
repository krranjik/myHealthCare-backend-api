const express = require('express')
const router = express.Router();
const user = require('../controllers/userController');
const userAuth = require('../middleware/userAuth');

router.post("/registeruser", user.registeruser)
router.get("/getallusers", user.getuser)
router.get("/finduserbyid/:_id", user.finduserById)
router.put("/updateuser/:_id", user.updateuser)
router.delete("/deleteuser/:_id", user.deleteuser)
router.post("/userlogin", user.userLogin)

module.exports = router