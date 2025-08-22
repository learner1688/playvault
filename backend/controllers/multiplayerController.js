// Multiplayer controller
exports.findMatch = (req, res) => {
  // ...find PvP match...
  res.json({ matchId: null });
};
exports.reportWin = (req, res) => {
  // ...report win...
  res.json({ success: true });
};
