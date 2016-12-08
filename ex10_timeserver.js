/**
 * http://usejsdoc.org/
 */

var net = require('net');

var server = net.createServer(function listener(socket) {
	var date = new Date();
	console.log(date);
	var month = date.getMonth()/10 < 1 ? "0" + (date.getMonth()+1) : date.getMonth()+1;
	var day = date.getDate()/10 < 1 ? "0" + date.getDate().toString() : date.getDate();
	var hours = date.getHours()/10 < 1 ? "0" + date.getHours().toString() : date.getHours();
	var minutes = date.getMinutes()/10 < 1 ? "0" + date.getMinutes().toString() : date.getMinutes();
	var date_string = date.getFullYear() + "-" + month + "-" + day +
	" " + hours + ":" + minutes + "\n";  
	socket.write(date_string);
	socket.end();
});


server.listen(process.argv[2]);