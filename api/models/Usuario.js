/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {

		nombre : { type: 'string', required:true },

		apellidos : { type: 'string', required:true },

		email : { type: 'string', unique:true },

		password : { type: 'string', required:true },

		edad : { type: 'integer', required:true },

		fecha_nacimiento : { type: 'date', required:true },

		genero : { type: 'string', enum: ['M', 'H', 'N'], required:true},

		celebrity : { type: 'boolean'},

		ciudad : {type:'integer'}
	},
	validar : function(p,hash,cb){
		var bcrypt = require('bcrypt-nodejs');
		cb(bcrypt.compareSync(p, hash));
	},
	encriptarPassword : function(password,cb){
		var bcrypt = require('bcrypt-nodejs');
		cb(bcrypt.hashSync(values.password));
	},
	comprobarUsuario:function(email,password,req,cb){
		var usuario = '';
		Usuario.findOne({email:email},function(err,result){
			if (err) {
				cb(err,result);
			};
			if (result != 'undefined') {
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
	},
	beforeValidate: function (values, cb) {
		console.log("maldita sea");

		var bcrypt = require('bcrypt-nodejs');

		var strDate = values.fecha_nacimiento;
		//console.log("maldita fecha:",values.fecha_nacimiento)
		var dateParts = strDate.split("/");

		var date = new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);

		var hash = bcrypt.hashSync(values.password);

	
		values.password = hash;
 		//para comparar los hash
		//bcrypt.compareSync("bacon", hash); // true
		values.fecha_nacimiento = date;
//  	console.log("Fecha de Nacimiento: ",date);
	//    values.fecha_nacimiento = new Date(values.fecha_nacimiento);
		cb();
	}
};

