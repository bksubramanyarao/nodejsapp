var http = require('http');
var qs = require('querystring');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    var body='';
    req.on('data', function(chunk) {
      console.log(chunk);
      body+=chunk;
    });
    req.on('end', function() {
      var data = qs.parse(body);
      res.writeHead(200, {'Content-Type': 'text/html'});
      var file = fs.createReadStream('index.html');
      file.pipe(res);
      //res.end(JSON.stringify(data));
    });
  }
  if (req.method === 'GET') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      var file = fs.createReadStream('index.html');
      file.pipe(res);
  }
}).listen(8888);

console.log('Listening on port 8888');
