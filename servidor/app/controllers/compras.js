module.exports.getCompra = function(application, req, res) {

	var id_compra = req.query.id;

	console.log(id_compra);

	var connection = application.config.dbConnection();
 
	var comprasModel = new application.app.models.comprasDAO(connection);

	comprasModel.FindByID(id_compra,function(error, result){     
		
		var compraResult = result;

		if (result){
		
			console.log(result);
		
			res.send(compraResult[0]);
		
		}else {
		
			console.log(error);
		
			res.status(500).send({error: error});
		
		}
        
	});

}

module.exports.salvarCompra = function(application, req, res) {

	var compra = req.body;

	console.log(req);

	var connection = application.config.dbConnection();

	var comprasModel = new application.app.models.comprasDAO(connection);

	comprasModel.salvarCompra(compra, function(error, result){     
		var compraResult = result;

		if (result){			
		
			res.send(compraResult);
		
		}else{
		
			console.log(error);
		
			res.status(500).send({error: error});
		
		}


	});
}

module.exports.editarCompra = function(application, req, res) {

	var compra = req.body;

	console.log(compra);

	var connection = application.config.dbConnection();

	var comprasModel = new application.app.models.comprasDAO(connection);

	comprasModel.editarCompra(compra, function(error, result){     
		var compraResult = result;

		if (result){			
		
			res.send(compraResult);
		
		}else{
		
			console.log(error);
		
			res.status(500).send({error: error});			
		}


	});
}

module.exports.deleteCompra = function(application, req, res) {
	
	var id_convidado = req.body.id;

	console.log(id_convidado);

	var connection = application.config.dbConnection();
 
	var comprasModel = new application.app.models.comprasDAO(connection);
	
	comprasModel.deleteCompra(id_convidado, function(error, result){     
		
		if (result){
		
			res.send(result);
		
		}else {
		
			console.log(error);
		
			res.status(500).send({error: error});
		}
	});
}

