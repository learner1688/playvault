// Game model (MongoDB example)
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: String,
  genre: String,
  platform: String,
  description: String,
  screenshots: [String],
  romUrl: String,
  trending: Boolean,
});

module.exports = mongoose.model('Game', gameSchema);
