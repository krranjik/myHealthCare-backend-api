const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const user = require('../controllers/patientController');

router.post("/registeruser", user.registerUser)
router.get("/getallusers", user.getUser)
router.get("/finduserbyid/:_id", user.findUserById)
router.put("/updateuser/:_id", user.updateUser)

router.get("/test99", auth, function(req, res){

})

module.exports = router