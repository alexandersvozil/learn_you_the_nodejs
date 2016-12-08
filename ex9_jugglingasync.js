/**
 * http://usejsdoc.org/
 */

var http = require('http');


var url_input1 = process.argv[2];
var url_input2 = process.argv[3];
var url_input3 = process.argv[4];

var int_counter = 3;

var str_data1 = "";
var str_data2 = "";
var str_data3 = "";
http.get(url_input1, function (response) {
	response.setEncoding('utf8');
	response.on("data", function (data) {
		str_data1 += data;
	});	
	response.on("end", function () {
		int_counter--;
		if (int_counter === 0) {
			console.log(str_data1);
			console.log(str_data2);
			console.log(str_data3);
		}
	});

});

http.get(url_input2, function (response) {
	response.setEncoding('utf8');
	response.on("data", function (data) {
		str_data2 += data;
	});	
	response.on("end",function() {
		int_counter--;
		if (int_counter === 0) {
			console.log(str_data1);
			console.log(str_data2);
			console.log(str_data3);
		}
	});
	
});

http.get(url_input3, function (response) {
	response.setEncoding('utf8');	
	response.on("data", function (data) {
		str_data3 += data;
	});	
	response.on("end", function () {
		int_counter--;
		if (int_counter === 0) {
			console.log(str_data1);
			console.log(str_data2);
			console.log(str_data3);
		}
	});

});

if (int_counter === 0) {
	console.log(str_data1);
	console.log(str_data2);
	console.log(str_data3);
}