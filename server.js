var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(5000);
app.use(express.static('public'));
console.log("Node is running on port 5000...");
var io = socket(server);

io.sockets.on('connection',function (socket) {


	nb_users = io.engine.clientsCount
//	console.log(io.engine.clientsCount)
	console.log('New connection: ' + socket.id);
	socket.on('player_info', manage);
	

	
	function manage(data){
		
		socket.broadcast.emit('other_players_info', data);
	}
	

	socket.on('disconnect', function () {

		socket.emit('disconnected');
		
	
	});
});
