/**
 * http://usejsdoc.org/
 */
var fs = require('fs');

var path_to_file = process.argv[2];
var inputfile_buffer = fs.readFileSync(path_to_file);
var inputfile_string = inputfile_buffer.toString();
var result = inputfile_string.split('\n').length-1;
console.log(result);

