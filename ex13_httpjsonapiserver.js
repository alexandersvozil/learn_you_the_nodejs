/**
 * http://usejsdoc.org/
 */

var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
	var req_url = req.url;
	var url_obj = url.parse(req_url,true);
	var result_json;
	if (url_obj.pathname === '/api/parsetime') {
		var iso = new Date(url_obj.query.iso);	
		result_json = {};
		result_json.hour = iso.getHours();
		result_json.minute = iso.getMinutes();
		result_json.second = iso.getSeconds();	
	}
	if (url_obj.pathname === '/api/unixtime') {
		result_json = {};
		var iso_unix = new Date(url_obj.query.iso)/1;		
		result_json.unixtime = iso_unix;			
	}
	if (result_json) {
		res.writeHead("200", {'Content-Type' : 'application/json'});
		res.end(JSON.stringify(result_json));			
	}else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(process.argv[2]);