/**
* Provincia.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	provincia:{
  		type:'string',
  		unique:true
  	},
  	comunidad_automona_id:{
  		type:'integer'
  	}
  }
};

