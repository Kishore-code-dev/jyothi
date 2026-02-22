const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    college: { type: String, required: true },
    teamName: { type: String },
    domain: { type: String, required: true, enum: ['Artificial Intelligence', 'Autonomous Systems', 'FinTech Architecture', 'Sustainable Energy', 'Robotics & Automation'] },
    linkedIn: { type: String },
    github: { type: String },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
