// Game routes: list, detail, play, and serve games.json
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { listGames, getGame, playGame } = require('../controllers/gamesController');

// Serve games.json for API
router.get('/', (req, res) => {
	const filePath = path.join(__dirname, '../models/games.json');
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) return res.status(500).json({ error: 'Failed to load games.' });
		res.json(JSON.parse(data));
	});
});

router.get('/:id', getGame);
router.post('/:id/play', playGame);

module.exports = router;
