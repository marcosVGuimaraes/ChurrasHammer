var mysql = require('mysql');

var conMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'churras_hammer'
	});
}

module.exports = function() {
	return conMySQL;
}	