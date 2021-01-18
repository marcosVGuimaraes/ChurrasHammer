function contabilidadeDAO(connection){
	this._connection = connection;
}

contabilidadeDAO.prototype.FindContabilidade = function(callback){

	var query = "select (SELECT COUNT(*) from participantes WHERE participantes.id_participante NOT IN (SELECT c.id_participante from convidado as c ) and participantes.consumo_bebida = false) as unitier10,";
		query +="(SELECT COUNT(*) from participantes WHERE participantes.id_participante NOT IN (SELECT c.id_participante from convidado as c ) and participantes.consumo_bebida = true) as unitier20,";
		query +="(select count(*) FROM participantes as p LEFT JOIN convidado as c ON (p.id_participante = c.id_participante)WHERE p.consumo_bebida = false AND c.consumo_bebida = false) as tier20,"; 
		query +="(select count(*) FROM participantes as p LEFT JOIN convidado as c ON (p.id_participante = c.id_participante)WHERE (p.consumo_bebida = true AND c.consumo_bebida = false) OR (p.consumo_bebida = false AND c.consumo_bebida = true) ) as tier30,";
		query +="(select count(*) FROM participantes as p LEFT JOIN convidado as c ON (p.id_participante = c.id_participante)WHERE p.consumo_bebida = true AND c.consumo_bebida = true) as tier40,";
		query +="(SELECT SUM(co.valor) from compras as co WHERE co.categoria = 'comida') as gastoComida,";
		query +="(SELECT SUM(co.valor) from compras as co WHERE co.categoria = 'bebida') as gastoBebida,";
		query +="(SELECT SUM(co.valor) from compras as co) as totalCompras";

	this._connection.query(query, callback);
}

module.exports = function(){
	return contabilidadeDAO;
}