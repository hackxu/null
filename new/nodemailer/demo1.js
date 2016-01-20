/**
 * Created by bluexu on 16/1/18.
 */
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://xhm520g@gmail.com:0000....@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo 👥 <foo@blurdybloop.com>', // sender address
    to: '1757704350@qq.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});