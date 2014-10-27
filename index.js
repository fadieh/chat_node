var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// Express initialises app to be a function handler so
// can supply to a HTTP server.

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
// Define a route handle / that gets called when we hit home.

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});
// Initialised instance of socket by passing http object. 
// Then listen on the connection event for incoming sockets,
// and log it to the console.

http.listen(3000, function(){
	console.log('listening on *:3000');
});
// We make the app listen on port 3000