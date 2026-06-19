// server.js
// Entry point for the Lacchi Food Court backend.
// Run with: npm start   (or: npm run dev for auto-restart on file changes)
require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./db/database'); // ensures tables exist on boot

const usersRouter = require('./routes/users');
const menuRouter = require('./routes/menu');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());               // allow the frontend (served from anywhere) to call this API
app.use(express.json());       // parse JSON request bodies

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'lacchi-food-court-backend', time: new Date().toISOString() });
});

app.use('/api/users', usersRouter);
app.use('/api/menu', menuRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/payments', paymentsRouter);

// 404 fallback for unknown API routes
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Not found.' });
});

// Generic error handler (catches anything thrown synchronously in route handlers)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`Lacchi Food Court backend running on http://localhost:${PORT}`);
  console.log(`Try: curl http://localhost:${PORT}/api/health`);
});
