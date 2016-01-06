/**
 * PruebasController
 *
 * @description :: Server-side logic for managing pruebas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	subirFoto:function(req, res){
		var foto = req.allParams();
		//console.log(req.file);
		console.log(foto)
		if (foto['subir']) {
		    req.file('avatar').upload({
		    	dirname: sails.config.appPath+'/assets/images'
		    },function (err, files) {
		      if (err)
		        return res.serverError(err);

		      return res.view('pruebas/subirFoto',{
		        message: files.length + ' file(s) uploaded successfully!',
		        files: files,
		        titulo:'Subir Fotos'
		      });
		    });
		}else{

			return res.view('pruebas/subirFoto',{
				titulo:'Subir Fotos'
			});
		}
	}
};

