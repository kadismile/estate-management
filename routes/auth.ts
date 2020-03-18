const express = require('express');
const router = express.Router();
const { authLogin, authUser } = require('../controllers/authController');

//const { protect } = require('../middleware/auth');
router.post('/login', authLogin);
router.post('/user', authUser);

module.exports = router;