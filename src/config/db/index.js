const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('connected successfully');
    } catch (error) {
        console.log('failed to connect to database');
    }
}

module.exports = { connect };
