module.exports.getParticipantes = function(application, req, res) {

	var connection = application.config.dbConnection();
 
	var participanteModel = new application.app.models.participanteDAO(connection);
	
	participanteModel.FindAll(function(error, result){     
		var participanteResult = result;

		if (result){
			//console.log(result);
			res.send(participanteResult);
		}

		if (error){
			res.status(500).send({error: error});
		}

        
	});

}

module.exports.getParticipante = function(application, req, res) {

	var id_participante = req.query.id;

	console.log(id_participante);

	var connection = application.config.dbConnection();
 
	var participanteModel = new application.app.models.participanteDAO(connection);

	participanteModel.FindByID(id_participante,function(error, result){     
		
		var participanteResult = result;

		if (result){
			console.log(result);
			res.send(participanteResult[0]);
		}

		if (error){
			console.log(error);
			res.status(500).send({error: error});
		}

        
	});

}

module.exports.getConvidados = function(application, req, res) {
	
	var connection = application.config.dbConnection();

	var convidadoModel = new application.app.models.convidadoDAO(connection);

	convidadoModel.FindAll(function(error, result){     
		var convidadoResult = result;

		if (result){
			res.send(convidadoResult);
		}

		if (error){
			console.log(error);
			res.status(500).send({error: error});
		}


	});
}

module.exports.getConvidado = function(application, req, res) {

	var id_convidado = req.query.id;

	console.log(id_convidado);

	var connection = application.config.dbConnection();
 
	var convidadoModel = new application.app.models.convidadoDAO(connection);

	convidadoModel.FindByID(id_convidado,function(error, result){     
		
		var participanteResult = result;

		if (result){
			console.log(result);
			res.send(participanteResult[0]);
		}

		if (error){
			console.log(error);
			res.status(500).send({error: error});
		}

        
	});

}

module.exports.salvarParticipante = function(application, req, res) {

	var participante = req.body;

	console.log(participante);

	var connection = application.config.dbConnection();

	var participanteModel = new application.app.models.participanteDAO(connection);

	participanteModel.salvarParticipante(participante, function(error, result){     
		var participanteResult = result;

		if (result){			
			res.send(participanteResult);
		}

		if (error){
			res.status(500).send({error: error});			
		}


	});
}

module.exports.salvarConvidado = function(application, req, res) {

	var convidado = req.body;

	console.log(convidado);

	var connection = application.config.dbConnection();

	var convidadoModel = new application.app.models.convidadoDAO(connection);

	convidadoModel.salvarConvidado(convidado, function(error, result){     
		var convidadoResult = result;

		if (result){			
			res.send(convidadoResult);
		}

		if (error){
			console.log(error);
			res.status(500).send({error: error});
		}


	});
}

module.exports.editarParticipante = function(application, req, res) {

	var participante = req.body;

	console.log(participante);

	var connection = application.config.dbConnection();

	var participanteModel = new application.app.models.participanteDAO(connection);

	participanteModel.editarParticipante(participante, function(error, result){     
		var participanteResult = result;

		if (result){			
			res.send(participanteResult);
		}

		if (error){
			console.log(error);
			res.status(500).send({error: error});			
		}


	});
}

module.exports.editarConvidado = function(application, req, res) {

	var convidado = req.body;

	console.log(convidado);

	var connection = application.config.dbConnection();

	var convidadoModel = new application.app.models.convidadoDAO(connection);

	convidadoModel.editarConvidado(convidado, function(error, result){     
		var participanteResult = result;

		if (result){			
			res.send(participanteResult);
		}

		if (error){
			console.log(error);
			res.status(500).send({error: error});			
		}


	});
}

module.exports.deleteParticipante = function(application, req, res) {
    var connection = application.config.dbConnection();

	var participanteModel = new application.app.models.participanteDAO(connection);
	
	var convidadoModel = new application.app.models.convidadoDAO(connection);

	var idParticipante = req.body.id;

	console.log(idParticipante);
	
    participanteModel.deleteParcipante(idParticipante, function(error, result){        
	
		if(result){

			convidadoModel.deleteConvidadoPorIdParcipante(idParticipante, function(error, result){
				if(result){
					res.send(result);    
				}	
			});

		}else{
			console.log(error);

			res.status(500).send({error: error});
		}	

		
	});
}

module.exports.deleteConvidado = function(application, req, res) {
    var connection = application.config.dbConnection();
	
	var convidadoModel = new application.app.models.convidadoDAO(connection);

	var id_convidado = req.body.id;
	
   	convidadoModel.deleteConvidado(id_convidado, function(error, result){
		if(result){
			res.send(result);    
		}else{
			console.log(error);

			res.status(500).send({error: error});
		}	
	});	
}