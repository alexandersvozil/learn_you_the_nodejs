/**
 * http://usejsdoc.org/
 */
var result = 0;
for (var input_index = 2; input_index<process.argv.length; input_index++) {
	result += Number(process.argv[input_index]);
}
console.log(result);