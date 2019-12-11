const express = require('express')
const router = express.Router();
const user = require('../controllers/userController');

router.post("/registeruser", user.registerUser)
router.get("/getallusers", user.getUser)
router.get("/finduserbyid/:_id", user.findUserById)
router.put("/updateuser/:_id", user.updateUser)
module.exports = router