// Leaderboard model (MongoDB example)
const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  userId: String,
  tokens: Number,
  gamesWon: Number,
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
