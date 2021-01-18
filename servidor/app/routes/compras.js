module.exports = function(application){ 
  
	application.get('/compras/getCompra', function(req, res){		
        application.app.controllers.compras.getCompra(application, req, res);		
    });

	application.post('/compras/salvarCompra', function(req, res){		
        application.app.controllers.compras.salvarCompra(application, req, res);		
    });

    application.post('/compras/editarCompra', function(req, res){		
        application.app.controllers.compras.editarCompra(application, req, res);		
    });

    application.post('/compras/deleteCompra', function(req, res){		
        application.app.controllers.compras.deleteCompra(application, req, res);		
    });
};