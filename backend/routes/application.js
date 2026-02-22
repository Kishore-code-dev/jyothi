const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT
const verifyAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid Token' });
        req.userId = decoded.userId;
        next();
    });
};

// Email Transporter (Placeholder config)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Register Application
router.post('/register', async (req, res) => {
    try {
        const application = new Application(req.body);
        await application.save();

        // Send Confirmation Email
        await transporter.sendMail({
            from: '"Velvet Code Summit" <no-reply@velvetcodesummit.com>',
            to: application.email,
            subject: 'Application Received | Velvet Code Summit 2026',
            text: `Dear ${application.name}, your application for Velvet Code Summit 2026 has been received. We will review it shortly.`
        }).catch(e => console.error('Mail error:', e));

        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        if (error.code === 11000) return res.status(400).json({ message: 'Email already registered' });
        res.status(500).json({ error: error.message });
    }
});

// Admin: Get all applications
router.get('/', verifyAdmin, async (req, res) => {
    const { domain } = req.query;
    const query = domain ? { domain } : {};
    const apps = await Application.find(query).sort({ appliedAt: -1 });
    res.json(apps);
});

// Admin: Approve/Reject
router.patch('/:id/status', verifyAdmin, async (req, res) => {
    const { status } = req.body;
    const app = await Application.findByIdAndUpdate(req.params.id, { status }, { new: true });

    // Send Status Email
    const subject = status === 'Approved' ? 'Invitation: Velvet Code Summit 2026' : 'Application Update: Velvet Code Summit 2026';
    const text = status === 'Approved'
        ? `Congratulations ${app.name}! Your application has been approved. Welcome to Velvet Code Summit.`
        : `Dear ${app.name}, thank you for your interest. Unfortunately, we cannot move forward with your application at this time.`;

    await transporter.sendMail({
        from: '"Velvet Code Summit" <no-reply@velvetcodesummit.com>',
        to: app.email,
        subject,
        text
    }).catch(e => console.error('Mail error:', e));

    res.json(app);
});

// Admin: Stats
router.get('/stats', verifyAdmin, async (req, res) => {
    const total = await Application.countDocuments();
    const pending = await Application.countDocuments({ status: 'Pending' });
    const approved = await Application.countDocuments({ status: 'Approved' });
    res.json({ total, pending, approved });
});

module.exports = router;
