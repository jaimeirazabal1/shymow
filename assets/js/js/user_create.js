$(document).ready(function(){
	get_comunidades();

	//evento para coger las provincias
	$("body").on("change","#comunidades_autonomas",function(){
		if ($(this).val()) {

		}else{

		}
	});
});

function get_comunidades(){
	$.ajax({
		url:"/Comunidad_automona",
		dataType:'json',
		success:function(r){
			//console.log(r);
			setSelect(r);
		}
	})
}
function setSelect(objetsArray){
	if (!objetsArray.length) {
		alert("Error: No se cargaron las comunidades autonomas");
	};
	var select = "<select required id='comunidades_autonomas' class='form-control'>";
	select += "<option>Comunidad Autónoma</option>";
	for (var i = 0; i < objetsArray.length; i++) {
		select += "<option value='"+objetsArray[i].id+"'>"+objetsArray[i].comunidad+"</option>";
	};
	select += "</select>";
	$("#div_comunidades").html(select);
}
