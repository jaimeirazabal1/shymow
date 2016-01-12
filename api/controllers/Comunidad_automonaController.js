/**
 * Comunidad_automonaController
 *
 * @description :: Server-side logic for managing Comunidad_automonas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index : function(req, res){
		Comunidad_automona.find({},function(err,results){
      		return res.json(results);
    	})
	}
};

