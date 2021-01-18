module.exports = function(application){ 
  
    application.get('/contabilidade', function(req, res){		
        application.app.controllers.contabilidade.getContabilidade(application, req, res);		
      });
};