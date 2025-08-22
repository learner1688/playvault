// VaultPlay Backend Entry Point
// Express server setup, WebSocket, DB connection


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { setupWebSocket } = require('./services/websocket');
const { connectDB } = require('./utils/db');

// Load environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);

// CORS setup for frontend API calls
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
}));
app.use(express.json());

// Connect to DB
connectDB();

// Modular routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/games', require('./routes/games'));
app.use('/api/tokens', require('./routes/tokens'));
app.use('/api/leaderboard', require('./routes/leaderboard'));
app.use('/api/multiplayer', require('./routes/multiplayer'));
app.use('/api/ads', require('./routes/ads'));

// WebSocket for multiplayer
setupWebSocket(server);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`VaultPlay backend running on port ${PORT}`);
});
