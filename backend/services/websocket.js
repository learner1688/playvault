// WebSocket setup for multiplayer
const WebSocket = require('ws');

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });
  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      // ...handle multiplayer messages...
    });
    ws.send('Welcome to VaultPlay Multiplayer!');
  });
}

module.exports = { setupWebSocket };
