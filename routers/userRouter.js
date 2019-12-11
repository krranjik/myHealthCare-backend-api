const express = require('express')
const router = express.Router();
const user = require('../controllers/userController');

router.post("/register", user.registerUser)
router.get("/getallusers", user.getUser)
module.exports = router