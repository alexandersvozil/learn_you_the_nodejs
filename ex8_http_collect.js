/**
 * http://usejsdoc.org/
 */
var http = require('http');
var bl = require('bl');

var url_input = process.argv[2];

http.get(url_input, function (response) {
	response.pipe(bl(function (err,data) {
		if (err) {
			console.error(err);
		}
		console.log(data.length);
		console.log(data.toString());
		
	}));
});
