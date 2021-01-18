module.exports = function(application){ 
  
    application.get('/listaParticipantes', function(req, res){		
        application.app.controllers.listaParticipantes.getParticipantes(application, req, res);		
      });

    application.get('/listaParticipante', function(req, res){    
        application.app.controllers.listaParticipantes.getParticipante(application, req, res);   
      });

    application.post('/listaParticipantes/salvarParticipante', function(req, res){		
      application.app.controllers.listaParticipantes.salvarParticipante(application, req, res);		
    });

    application.post('/listaParticipantes/editarParticipante', function(req, res){    
      application.app.controllers.listaParticipantes.editarParticipante(application, req, res);   
    });

    application.post('/listaParticipantes/deletarParticipante', function(req, res){		
      application.app.controllers.listaParticipantes.deleteParticipante(application, req, res);		
    });

    application.get('/listaConvidados', function(req, res){		
      application.app.controllers.listaParticipantes.getConvidados(application, req, res);		
    });

    application.get('/listaConvidado', function(req, res){   
      application.app.controllers.listaParticipantes.getConvidado(application, req, res);    
    });
   
    application.post('/listaConvidados/salvarConvidado', function(req, res){		
      application.app.controllers.listaParticipantes.salvarConvidado(application, req, res);		
    });    

    application.post('/listaConvidados/editarConvidado', function(req, res){    
      application.app.controllers.listaParticipantes.editarConvidado(application, req, res);   
    });

    application.post('/listaConvidados/deleteConvidado', function(req, res){		
      application.app.controllers.listaParticipantes.deleteConvidado(application, req, res);		
    });
};