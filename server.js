var express = require('express'),
http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.get('/',function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});
/*app.use(function (req, res) {
console.log(req.headers);
//res.writeHead(200, { 'Content-Type': 'text/html' });
//res.end('<html><body><h1>Hello World</h1></body></html>');
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});*/


app.use(function (req, res, next) {
        console.log(req.headers);
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        // Pass to next layer of middleware
        next();
    });


var server = http.createServer(app);

server.listen(port, hostname, function(){
console.log(`Server running at http://${hostname}:${port}/`);
});