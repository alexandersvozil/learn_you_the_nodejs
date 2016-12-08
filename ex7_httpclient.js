/**
 * http://usejsdoc.org/
 */

var http = require('http');

var url_input = process.argv[2]; 
http.get(url_input, function(response) {
	response.setEncoding('utf8');
	response.on("data", function (data) {
		console.log(data);
	});
});