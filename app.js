var Barc = require('barc')
,barc = new Barc()
,fs = require('fs');
var http = require("http");

var server = http.createServer(function(req, res) {
    var data = req.url.replace('/','');
    var buf = barc.code128(data, 300, 150);
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(buf);
    res.end();
});
server.listen(3000);
console.log("Server is listening");

