const express = require('express');
const router = express.Router();
const { authLogin } = require('../controllers/authController');

//const { protect } = require('../middleware/auth');
router.post('/login', authLogin);

module.exports = router;