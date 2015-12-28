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
    return res.view("user/index",{todo:"hola mundo"})
    /*return res.json({
      todo: 'index() is not implemented yet!'
    });*/
  },
  create: function (req, res){
    var params = req.allParams();
    console.log(req.allParams());
    if (params.create) {
      Usuario.create(params).exec(function(err){
        console.log("Error:",err)
      });
    }else{
      
    }
    return res.view("user/create");
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
};

