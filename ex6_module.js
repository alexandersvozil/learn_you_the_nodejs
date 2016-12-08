/**
 * http://usejsdoc.org/
 */

var fs = require('fs');
var path = require('path');

module.exports = function (dir_name, ext_name, callback) {
	fs.readdir (dir_name, function(err,files) {
		if (err) {
			return callback(err);
		}
		files = files.filter(function(file){
			return path.extname(file) === "."+ext_name;
		});
		
		callback(null,files);
	});

};