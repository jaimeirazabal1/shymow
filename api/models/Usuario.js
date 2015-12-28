/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    nombre : { type: 'string' },

    apellidos : { type: 'string' },

    email : { type: 'string' },

    password : { type: 'string' },

    edad : { type: 'integer' },

    fecha_nacimiento : { type: 'datetime' },

    genero : { type: 'string', enum: ['M', 'H', 'N'] }
  },
  beforeCreate: function (values, cb) {
  	console.log("Fecha de Nacimiento: ",values.fecha_nacimiento);
//    values.fecha_nacimiento = new Date(values.fecha_nacimiento);
    cb();
  }
};

