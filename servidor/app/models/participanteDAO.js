function participanteDAO(connection){
	this._connection = connection;
}

participanteDAO.prototype.FindAll = function(callback){
	this._connection.query("SELECT p.*, c.id_convidado from participantes as p LEFT JOIN convidado as c on (p.id_participante = c.id_participante) order by p.nome_participante", callback);
}

participanteDAO.prototype.FindByID = function(id_participante, callback){
	this._connection.query("SELECT id_participante, nome_participante, setor, consumo_bebida from participantes where id_participante =" + id_participante, callback);
}
	
participanteDAO.prototype.salvarParticipante = function(participante, callback){
	this._connection.query('insert into participantes set ? ', participante, callback);
}

participanteDAO.prototype.editarParticipante = function(participante, callback) {
		this._connection.query("update participantes SET nome_participante = '" +participante.nome_participante+ "', setor ='"+participante.setor+"' , consumo_bebida = '"+participante.consumo_bebida+"' where id_participante = " +participante.id_participante, callback);
}

participanteDAO.prototype.deleteParcipante = function(id_participante, callback){
	this._connection.query('delete from participantes where id_participante = ' + id_participante, callback);
}

module.exports = function(){
	return participanteDAO;
}