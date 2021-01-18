function comprasDAO(connection){
	this._connection = connection;
}

comprasDAO.prototype.FindAll = function(callback){
	this._connection.query("Select * from compras", callback);
}

comprasDAO.prototype.salvarCompra = function(compra, callback){
	this._connection.query('insert into compras set ? ', compra, callback);
}

comprasDAO.prototype.deleteCompra = function(id_compra, callback){
	this._connection.query('delete from compras where id_compra = ' + id_compra, callback);
}

module.exports = function(){
	return comprasDAO;
}