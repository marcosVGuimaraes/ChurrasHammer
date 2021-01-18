module.exports = function(application){ 
     
    application.get('/listaConvidados', function(req, res){		
      application.app.controllers.listaConvidados.getConvidados(application, req, res);		
    });

    application.get('/listaConvidado', function(req, res){   
      application.app.controllers.listaConvidados.getConvidado(application, req, res);    
    });
   
    application.post('/listaConvidados/salvarConvidado', function(req, res){		
      application.app.controllers.listaConvidados.salvarConvidado(application, req, res);		
    });    

    application.post('/listaConvidados/editarConvidado', function(req, res){    
      application.app.controllers.listaConvidados.editarConvidado(application, req, res);   
    });

    application.post('/listaConvidados/deleteConvidado', function(req, res){		
      application.app.controllers.listaConvidados.deleteConvidado(application, req, res);		
    });
};