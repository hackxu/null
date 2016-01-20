/**
 * Created by bluexu on 16/1/18.
 */
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

// listen for token updates (if refreshToken is set)
// you probably want to store these to a db
generator.on('token', function(token){
    console.log('New token for %s: %s', token.user, token.accessToken);
});

// login
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: '{username}',
            clientId: '{Client ID}',
            clientSecret: '{Client Secret}',
            refreshToken: '{refresh-token}',
            accessToken: '{cached access token}'
        })
    }
});