// Multiplayer routes
const express = require('express');
const router = express.Router();
const { findMatch, reportWin } = require('../controllers/multiplayerController');

router.post('/find', findMatch);
router.post('/win', reportWin);

module.exports = router;
