const express = require('express');
const cors = require('cors');
const app= express();
const cookieParser= require('cookie-parser')
require('./config/mongoose.config');
require('dotenv').config({path:__dirname + '/../.env'});
console.log(process.env.SECRET_KEY)

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// origin has to be from where client is making requests to server
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000' 
}));


require('./routes/Users.routes')(app);
// require('./routes/Message.routes')(app);
require('./routes/Inquiry.routes')(app);
const server = app.listen(8000, ()=>{
    console.log("Listening at port 8000")
})



const io = require("socket.io")(server);
let connectedClients=0;
const { Message } = require('./models/Message.model')

io.on("connection", socket =>{
    connectedClients++;
    console.log(socket.id)
    socket.broadcast.emit('new user has joined!'); 
    console.log("We have " + connectedClients + "connected!") 
    
    // This is an event listener
    socket.on('new message', payload => {
        console.log(payload)
        Message.create(payload)
        .then(msg=>{
            io.emit('updated messages', msg)
        })
        .catch(err=>console.log(err))
    })

    // This is an event listener
    socket.on('disconnect', ()=>{
        connectedClients--;
        console.log("We have " + connectedClients + "connected!")
    })
})



// SMTP server
var transport = {
    host: 'smtp.gmail.com', // e.g. smtp.gmail.com
    auth: {
        user: creds.USER,
        pass: creds.PASS
        }
    }

    var transporter = nodemailer.createTransport(transport)

    transporter.verify((error, success) => {
        if (error) {
        console.log(error);
        } else {
        console.log('All works fine, congratz!');
        }
    });
    
    app.post('/send', (req, res, next) => {
        const name = req.body.name
        const email = req.body.email
        const message = req.body.messageHtml
        var mail = {
        from: name,
        to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  
        subject: 'Contact form request',
    
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
    })

