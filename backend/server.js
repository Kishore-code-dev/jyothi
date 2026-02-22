const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Security Middleware
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(cors());
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use('/api/', limiter);

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/applications', require('./routes/application'));

// Database Connection
const dbUri = process.env.MONGODB_URI;
if (dbUri && dbUri.includes('mongodb')) {
    mongoose.connect(dbUri)
        .then(() => console.log('Connected to Agentic Summit DB'))
        .catch(err => console.error('DB Connection Error. Demo Mode active.', err));
} else {
    console.warn('⚠️ PROMPT: MONGODB_URI missing. Running in DEMO MODE (In-memory storage).');
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
