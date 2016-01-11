ruby: warning: -K is specified; it is for 1.8 compatibility and may cause odd behavior

var http = require('http');

var port = process.env.port || 1337;
http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello node.js/n');
}).listen(port, '127.0.0.1', function () {
    console.log('Server running at http://127.0.0.1:1337')
})


