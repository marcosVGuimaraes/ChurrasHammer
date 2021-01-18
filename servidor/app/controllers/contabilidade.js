module.exports.getContabilidade = function(application, req, res) {
	
	var contabilidadeResult = {};

	var connection = application.config.dbConnection();
 
	var contabilidadeModel = new application.app.models.contabilidadeDAO(connection);

	var compraModel = new application.app.models.comprasDAO(connection);
	
	contabilidadeModel.FindContabilidade(function(error, result){     
		
		if (result){

			contabilidadeResult = result;

			var total = contabilidadeResult[0].unitier10 * 10;
			total = total + contabilidadeResult[0].unitier20 * 20;
			total = total + contabilidadeResult[0].tier20 * 20;
			total = total + contabilidadeResult[0].tier30 * 30;
			total = total + contabilidadeResult[0].tier40 * 40;

			compraModel.FindAll(function(error, result) {
				if(result) {

					var comprasresult = result;

					res.send({totalArrecado: total, 
						totalGastoCompras: contabilidadeResult[0].totalCompras, 
						totalGastoComida: contabilidadeResult[0].gastoComida,
						totalGastoBebida: contabilidadeResult[0].gastoBebida,
						compras: comprasresult}
					);
				}else{					
					console.log(error);
					res.status(500).send({error: error});					
				}
			})
		}

		if (error){
			console.log(error);
			res.status(500).send({error: error});
		}
	});
}
