var http = require('http');

var server = http.createServer(function (request, response){
	response.end('It Works!! Path Hit: ' + request.url);
});

server.listen(8899, function(){
  console.log("Server listening on: http://localhost:8899");
});