// Ads routes: banner, rewarded
const express = require('express');
const router = express.Router();
const { getBannerAd, getRewardedAd } = require('../controllers/adsController');

router.get('/banner', getBannerAd);
router.get('/rewarded', getRewardedAd);

module.exports = router;
