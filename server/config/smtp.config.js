const nodemailer = require('nodemailer');

var transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
        }
    };

module.exports.transporter = nodemailer.createTransport(transport)
