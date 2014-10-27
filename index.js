var app = require('express')();
var http = require('http').Server(app);
// Express initialises app to be a function handler so
// can supply to a HTTP server.

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
// Define a route handle / that gets called when we hit home.

http.listen(3000, function(){
	console.log('listening on *:3000');
});
// We make the app listen on port 3000