var server = require ('http').createServer();
var io = require('socket.io')(server);

io.sockets.on('connection', function(socket) {

});

console.log('Server startecd.');
server.listen(3000);