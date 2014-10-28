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

	io.on('disconnect', function(){
	io.emit('disconnect', 'user disconnected');
	});

	socket.on('chat message', function(msg){
	console.log('message: ' + msg);
	});

	socket.on('chat message', function(msg){
	io.emit('chat message', msg);
	});

});

http.listen(3000, function(){
	console.log('listening on *:3000');
});