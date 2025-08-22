// Games controller: list, detail, play
exports.listGames = (req, res) => {
  // ...return list of games...
  res.json([]);
};
exports.getGame = (req, res) => {
  // ...return game detail...
  res.json({});
};
exports.playGame = (req, res) => {
  // ...handle game play logic...
  res.json({ success: true });
};
