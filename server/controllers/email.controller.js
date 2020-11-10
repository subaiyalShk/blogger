const nodemailer =require('nodemailer');
const { transporter } =require('../config/smtp.config')

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('SMTP server up');
    }
});

module.exports.send = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    var mail = {
        from: name,
        to: 'mahin.tariqs@gmail.com',  
        subject: 'Inquiry through your Blog site by '+ email,
        html: message
    }

    transporter.sendMail(mail, (err, data) => {
    if (err) {
        res.json({
        msg: 'fail'
        })
    } else {
        res.json({
        msg: 'success'
        })
    }
    })
}