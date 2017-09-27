var net = require('net');

var host = '35.185.12.150';
var port = 23;
var fs = require('fs');
//var host = '96.234.155.138';
//var port = 5555;
var client = new net.Socket();
client.connect(port, host, function(){
	console.log('CONNECTED TO: '+ host +':' + port);

});

client.on('data', function(data) {
	console.log(data.toString());
	fs.appendFile('log.txt', data.toString(), function(){});
	});
client.on('close', function(){
	console.log('Connection closed');
});