// DB connection utility
const mongoose = require('mongoose');
const { Pool } = require('pg');

function connectDB() {
  if (process.env.DB_TYPE === 'mongo') {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  } else {
    // PostgreSQL
    const pool = new Pool({
      connectionString: process.env.PG_URI,
    });
    // ...store pool for queries...
  }
}

module.exports = { connectDB };
