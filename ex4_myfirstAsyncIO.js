/**
 * 
 */

var fs = require('fs');
var path_file = process.argv[2];

fs.readFile(path_file, function(err, data){
	if(err){
		console.log(err);
	}
	var data_string = data.toString();
	console.log(data_string.split('\n').length-1);
	
});
