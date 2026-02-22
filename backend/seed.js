const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const existing = await User.findOne({ username: 'admin' });
        if (!existing) {
            const admin = new User({
                username: 'admin',
                password: 'velvet-password-2026'
            });
            await admin.save();
            console.log('Admin user created successfully: admin / velvet-password-2026');
        } else {
            console.log('Admin user already exists');
        }
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedAdmin();
