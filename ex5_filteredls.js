/**
 * http://usejsdoc.org/
 */

var fs = require('fs');
var path = require('path');

var directory_input = process.argv[2];
var file_extension_input = process.argv[3];

fs.readdir(directory_input, function(err,list) {
	if (err) {
		console.log(err);
	}
	list.forEach(function(file) {
		if (path.extname(file) === "."+file_extension_input) {
			console.log(file);
		}
	});
});