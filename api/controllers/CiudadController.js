/**
 * CiudadController
 *
 * @description :: Server-side logic for managing ciudads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:function(req,res){
		var params = req.allParams();
		if (params['registro']) {
			Ciudad.create(params).exec(function(err, result){
				if (err) {
					console.log(err)
				}else{
					return res.view('ciudad/create',{
						mensaje:'Ciudad registrada correctamente'
					});
				}
			})
		}else{
			return res.view('ciudad/create');
		}
	}
};

