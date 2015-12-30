/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `UserController.index()`
   */
  index: function (req, res) {

    Usuario.find({}).exec(function findCB(err, found){
      console.log(found)
      if (found.length)
        return res.view("user/index",{registros:found,generos:{'H':'Hombre','F':'Femenino','N':'Nulo'}})
      else
        return res.view("user/index",{registros:""})
    });
    
    /*return res.json({
      todo: 'index() is not implemented yet!'
    });*/
  },
  create: function (req, res){
    var error = '';
    var params = req.allParams();
    console.log(req.allParams());
    if (params.create) {
      Usuario.create(params).exec(function(err, created){
        if (created) {

          return res.view("user/create",{mgs:'Usuario Registrado con exito'});
        }else{
          
          return res.view("user/create",{err:err});
        }
        
      });
    }else{
      
      return res.view("user/create",{mensaje:'HOla que tal',err:error});
    }
  },

  /**
   * `UserController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `UserController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `UserController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
  login: function(req, res){
         req.session.authenticated = true;
         
         // dentro de req.session, que es un objecto, se pueden meter los datos que se quieran como que usuario es req.session.user = user;
         return res.ok();
    },

   logout: function(req, res){
        req.session.destroy();
        return res.redirect('/');
   }
};

