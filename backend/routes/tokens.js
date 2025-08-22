// Token routes: earn, spend, sync
const express = require('express');
const router = express.Router();
const { earnTokens, spendTokens, syncTokens } = require('../controllers/tokensController');

router.post('/earn', earnTokens);
router.post('/spend', spendTokens);
router.get('/sync', syncTokens);

module.exports = router;
