module.exports = {
	comprobarUsuario:function(email,password,req,cb){
		var usuario = '';
		console.log(email,password)
		Usuario.findOne({email:email},function(err,result){

			if (err) {
				cb(err,result);
			};
			if (result) {

				usuario = result;
				Usuario.validar(password,result['password'],function(result){
					if (result) {
						req.session.authenticated = true;
						req.session.user = usuario;
						cb(err,{valido:result,'mensaje':"autenticado correctamente",clase:'success'});
					}else{
						cb(err,{valido:result,'mensaje':"error autenticado un dato errado",clase:'danger'});						
					}
				})
			}else{
				cb(err,{valido:false,'mensaje':"Error: email o contrase;a invalidos",clase:'danger'});	
			}
		});
	}
}