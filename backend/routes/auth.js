// Auth routes: email/social login
const express = require('express');
const router = express.Router();
const { login, register, socialLogin } = require('../controllers/authController');

router.post('/login', login);
router.post('/register', register);
router.post('/social', socialLogin);

module.exports = router;
