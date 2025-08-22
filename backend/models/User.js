// User model (MongoDB example)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  tokens: { type: Number, default: 0 },
  gamesPlayed: [String],
  leaderboardRank: { type: Number, default: 0 },
  socialId: String,
});

module.exports = mongoose.model('User', userSchema);
