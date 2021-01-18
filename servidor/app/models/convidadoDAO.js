function convidadoDAO(connection){
	this._connection = connection;
}

convidadoDAO.prototype.FindAll = function(callback){
	this._connection.query("select c.*, p.nome_participante as convidado_por from convidado as c INNER JOIN participantes as p on (c.id_participante = p.id_participante) order by c.nome", callback);
}

convidadoDAO.prototype.FindByID = function(id_convidado, callback){
	this._connection.query("SELECT id_convidado, nome, consumo_bebida from convidado where id_convidado =" + id_convidado, callback);
}

convidadoDAO.prototype.salvarConvidado = function(convidado, callback){
	this._connection.query('insert into convidado set ? ', convidado, callback);
}

convidadoDAO.prototype.editarConvidado = function(convidado, callback){
	this._connection.query("update convidado SET nome= '" +convidado.nome+ "', consumo_bebida = '"+convidado.consumo_bebida+"' where id_convidado = " +convidado.id_convidado, callback);
}

convidadoDAO.prototype.deleteConvidado = function(id_convidado, callback){
	this._connection.query('delete from convidado where id_convidado = ' + id_convidado , callback);
}

convidadoDAO.prototype.deleteConvidadoPorIdParcipante = function(id_participante, callback){
	this._connection.query('delete from convidado where id_participante = ' + id_participante, callback);
}

module.exports = function(){
	return convidadoDAO;
}