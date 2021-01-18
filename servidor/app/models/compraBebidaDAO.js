function compraBebidaDAO(connection){
	this._connection = connection;
}

compraBebidaDAO.prototype.FindAll = function(callback){
	this._connection.query("Select * from compra_bebida", callback);
}

compraBebidaDAO.prototype.salvarCompra = function(compraBebida, callback){
	this._connection.query('insert into compra_bebida set ? ', compraBebida, callback);
}

module.exports = function(){
	return compraBebidaDAO;
}