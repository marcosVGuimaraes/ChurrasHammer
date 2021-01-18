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
};