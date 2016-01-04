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
  var params = req.allParams();
  if (params['create']) {
    Usuario.create(params,function(err, created){
      if (err) {
       
        return res.view("user/create",{
          err: err
        });
      }else{
        return res.view("user/create",{
          mensaje:'El Usuario se Creo con éxito!'
        });
      }
    });
  }else{
    return res.view("user/create");
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
  },
  /*
  * metodo para autenticarse en el sistema
  */
  login: function(req, res){
    var params = req.allParams();
     console.log('Parametros por post:',params);
    var user = '';
    if (params['login']) {
      Sesion.comprobarUsuario(params['email'],params['password'],req,function(valido,mensaje){
        return res.view("user/login",{mensaje:mensaje});
      }) 
    }else{
      return res.ok();
    }

    // dentro de req.session, que es un objecto, se pueden meter los datos que se quieran como que usuario es req.session.user = user;
  },

  logout: function(req, res){
    req.session.destroy();
    return res.redirect('/');
  },
  bienvenida: function(req, res){
    console.log('usuario autenticado:',req.session.user);
    return res.view('user/bienvenida',{'mensaje':'Bienvenido al sistema','usuario_autenticado':req.session.user});
  }
};

