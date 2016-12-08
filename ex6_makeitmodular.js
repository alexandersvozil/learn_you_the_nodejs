/**
 * http://usejsdoc.org/
 */

var directory_input = process.argv[2];
var file_extension_input = process.argv[3];

var ex6_module = require('./ex6_module');
ex6_module(directory_input, file_extension_input, function(err, data){
	
	if (err){
		console.log(err);
	}
	
	data.forEach(function(line){
		console.log(line);
	});
});
