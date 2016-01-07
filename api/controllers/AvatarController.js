/**
 * AvatarController
 *
 * @description :: Server-side logic for managing avatars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	uploadpic:function(req,res){
		var foto = req.allParams();
		console.log(req.file);
		console.log("foto:",foto)
		if (foto['subir']) {
		    req.file('avatar').upload({
		    	dirname: sails.config.appPath+'/assets/images'
		    },function (err, files) {
		      if (err)
		        return res.serverError(err);

		    	console.log("archivos subidos:",files)
		      return res.redirect('user/bienvenida');
		    });
		}
	}
};

