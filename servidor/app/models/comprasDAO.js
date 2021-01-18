function comprasDAO(connection){
	this._connection = connection;
}

comprasDAO.prototype.FindAll = function(callback){
	this._connection.query("Select * from compras order by compras.descricao", callback);
}

comprasDAO.prototype.FindByID = function(id_compra, callback){
	this._connection.query("SELECT id_compra, descricao, categoria, valor from compras where id_compra =" + id_compra, callback);
}

comprasDAO.prototype.salvarCompra = function(compra, callback){
	this._connection.query('insert into compras set ? ', compra, callback);
}

comprasDAO.prototype.editarCompra = function(compra, callback) {
	this._connection.query("update compras SET descricao = '" +compra.descricao+ "', categoria = '" +compra.categoria+ "', valor ='"+compra.valor+"' where id_compra = " +compra.id_compra, callback);
}

comprasDAO.prototype.deleteCompra = function(id_compra, callback){
	this._connection.query('delete from compras where id_compra = ' + id_compra, callback);
}

module.exports = function(){
	return comprasDAO;
}