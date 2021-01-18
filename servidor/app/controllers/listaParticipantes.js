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