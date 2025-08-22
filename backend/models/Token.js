// Token model (MongoDB example)
const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  userId: String,
  amount: Number,
  lastSync: Date,
});

module.exports = mongoose.model('Token', tokenSchema);
