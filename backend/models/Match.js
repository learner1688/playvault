// Match model (MongoDB example)
const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  player1: String,
  player2: String,
  winner: String,
  gameId: String,
  timestamp: Date,
});

module.exports = mongoose.model('Match', matchSchema);
