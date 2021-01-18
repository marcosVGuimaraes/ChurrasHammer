module.exports = function(application){ 
  
	application.post('/contabilidade/salvarCompra', function(req, res){		
        application.app.controllers.compras.salvarCompra(application, req, res);		
    });

    application.post('/contabilidade/deleteCompra', function(req, res){		
        application.app.controllers.compras.deleteCompra(application, req, res);		
    });
};