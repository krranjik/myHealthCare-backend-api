// Initialize express router
const express = require('express');
const router = new express.Router();
const bodyParser = require('body-parser');
const auth = require('../middleware/auth');

router.use(bodyParser.urlencoded({ extended: false }));

var loginController = require('../controllers/loginController')

router.route('/login')
    .post(loginController.login)
router.route('/logout')    
    .get(loginController.logout)

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
// Export API routes
module.exports = router;