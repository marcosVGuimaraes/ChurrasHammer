module.exports.getConvidados = function(application, req, res) {
	
	var connection = application.config.dbConnection();

	var convidadoModel = new application.app.models.convidadoDAO(connection);

	convidadoModel.FindAll(function(error, result){     
		var convidadoResult = result;

		if (result){
		
			res.send(convidadoResult);
		
		} else {
		
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
		
			res.send(participanteResult[0]);
		
		}else {
		
			console.log(error);
		
			res.status(500).send({error: error});
		
		}
        
	});

}

module.exports.salvarConvidado = function(application, req, res) {

	var convidado = req.body;

	var connection = application.config.dbConnection();

	var convidadoModel = new application.app.models.convidadoDAO(connection);

	convidadoModel.salvarConvidado(convidado, function(error, result){     
		var convidadoResult = result;

		if (result){			

			res.send(convidadoResult);

		} else {
		
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
		
		} else {
		
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
		
		} else{
		
			console.log(error);

			res.status(500).send({error: error});
		}

	});	
}