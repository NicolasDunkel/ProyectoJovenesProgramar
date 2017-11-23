window.onload = function() {
muestraPortada();
muestraFecha();
setInterval(muestraReloj, 1000);
}

function muestraFecha()
 {
var mydate=new Date()
var year=mydate.getYear()
if (year < 1000)
year+=1900
var day=mydate.getDay()
var month=mydate.getMonth()
var daym=mydate.getDate()
if (daym<10)
daym="0"+daym
var dayarray=new Array("Dom","Lun","Mar","Mie","Jue","Vie","Sab")
var montharray=new Array("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre")

// document.write(""+dayarray[day]+" "+daym+" de "+montharray[month]+", "+year+"")

var elemento = document.getElementById("fecha");

elemento.innerHTML = ""+dayarray[day]+" "+daym+" de "+montharray[month]+", "+year+"";
}

function muestraReloj() {
	var fechaHora = new Date();
	var horas = fechaHora.getHours();
	var minutos = fechaHora.getMinutes();
	var segundos = fechaHora.getSeconds();
		if(horas < 10) { horas = '0' + horas; }
		if(minutos < 10) { minutos = '0' + minutos; }
		if(segundos < 10) { segundos = '0' + segundos; }

document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
}

function muestraPortada() {

	var titulo  = '<h1>Portada</h1>';

	var linea1 =  'Pagina Web del Liceo creada para tener mayor agilidad';

	var linea2 =  'para ayudar y que sea mas facil';

	var linea3 =  'No olviden dejar un comentario.';

	var linea4 =  '				Atentamente, El equipo de Desarrollo.';

	var linea5 =  '		' + '"' + 'Hasta el viaje más largo comienza con un sólo paso. (Proverbio Chino)' ;


	var elemento = document.getElementById("cuerpo1");

elemento.innerHTML = titulo + '<p>'+ linea1 + '</p>' + '<p>'+ linea2 + '</p>' + '<p>'+ linea3 + '</p>' +
 '<p>'+ linea4 + '</p>' + '<p><i>'+ linea5 + '</i></p>';

}

function muestraQuien() {

	var titulo  = '<h1>Quienes Somos ...</h1>';

	var linea1 =  'Programadores inspirados para mejorar el liceo'; 

	var linea2 =  ' creando una pagina web interactiva';

	var linea3 =  'mostrando nuestras cualidades.';

	var linea4 =  '';

	var linea5 =  '';

	var elemento = document.getElementById("cuerpo1");

elemento.innerHTML = titulo + '<p>'+ linea1 + '</p>' + '<p>'+ linea2 + '</p>' + '<p>'+ linea3 + '</p>' +
 '<p>'+ linea4 + '</p>' + '<p>'+ linea5 + '</p>';


}

function muestraEventos() {

	var elemento = document.getElementById("cuerpo1");

	elemento.innerHTML = 

	"<h1>Próximos Eventos</h1>" +
"<div id='tabla1'>"+"<div id='cabtab1'>" + "Calendario de Eventos" + "</div>" + "<div id='cuerpotab1'>" +
	"<ul>" +
		"<li>01/Ene/2017 - Evento AAAAAAAAA</li>" + "<br>" +
		"<li>02/Feb/2017 - Evento BBBBBBBBB</li>" + "<br>" +
		"<li>03/Mar/2017 - Evento CCCCCCCCC</li>" + "<br>" +
		"<li>04/Abr/2017 - Evento DDDDDDDDD</li>" + "<br>" +
		"<li>05/May/2017 - Evento EEEEEEEEE</li>" +
	"</ul>" +
"</div>" +
"</div>";

}

function muestraGaleria() {

	var titulo  = '<h1>Galería de Imágenes</h1>';

	var elemento = document.getElementById("cuerpo1");

elemento.innerHTML = titulo + "<p>"+
"<a href='images/image-1.jpg' rel='lightbox[galeria]' title='Imagen 1'>"+
"<img src='images/image-1p.jpg'></a>&nbsp;" +
"<a href='images/image-2.jpg' rel='lightbox[galeria]' title='Imagen 2'>"+
"<img src='images/image-2p.jpg'></a>&nbsp;" + "</p>" +
"<a href='images/image-3.jpg' rel='lightbox[galeria]' title='Imagen 3'>"+
"<img src='images/image-3p.jpg'></a>&nbsp;"+
"<a href='images/image-4.jpg' rel='lightbox[galeria]' title='Imagen 4'>"+
"<img src='images/image-4p.jpg'></a>&nbsp;" + "</p>" +
"<a href='images/image-5.jpg' rel='lightbox[galeria]' title='Imagen 5'>"+
"<img src='images/image-5p.jpg'></a>&nbsp;"+
"<a href='images/image-6.jpg' rel='lightbox[galeria]' title='Imagen 6'>"+
"<img src='images/image-6p.jpg'></a>&nbsp;" + "</p>" +
"<a href='images/image-7.jpg' rel='lightbox[galeria]' title='Imagen 7'>"+
"<img src='images/image-7p.jpg'></a>&nbsp;" +
"<a href='images/image-8.jpg' rel='lightbox[galeria]' title='Imagen 8'>"+
"<img src='images/image-8p.jpg'></a>&nbsp;" + "</p>";

}

function muestraForm() {

	var elemento = document.getElementById("cuerpo1");

elemento.innerHTML = "<h1>Formulario de Contacto</h1>" +
"<form  method='post' id='frmContacto' action='http://forms.melodysoft.com' name= onSubmit='return Verificar()'>"+
"	    <input type='hidden' name='id' value='frmDatosx'>"+
"	    <table border='0' bgcolor='#EFEFEF' cellspacing='5'>"+
"	      <tr>"+
"		<td align='right'><b>Nombre:</b></td>"+
"		<td><input id='nombre' type='text' name='nombre' size='50' maxlength='40'></td>"+
"	      </tr>"+
"	      <tr>"+
"		<td align='right'><b>Localidad:</b></td>"+
"		<td><input type='text' name='localidad' size='50' maxlength='40'></td>"+
"	      </tr>"+
"	      <tr>"+
"		<td align='right'><b>Dirección:</b></td>"+
"		<td><input type='text' name='direccion' size='50' maxlength='40'></td>"+
"	      </tr>"+
"	      <tr>"+
"		<td align='right'><b>Teléfono:</b></td>"+
"		<td><input type='text' name='telefono' size='50' maxlength='40'></td>"+
"	      </tr>"+
"	      <tr>"+
"		<td align='right'><b>E-Mail:</b></td>"+
"		<td><input type='text' name='email' size='50'></td>"+
"	      </tr>"+
"	      <tr>"+
"		<td align='right'><b>Sexo:</b></td>"+
"		<td><input type='radio' name='sexo' value='Varon' checked> Hombre"+
"                   <input type='radio' name='sexo' value='Mujer' > Mujer</td>"+
"	      </tr>"+
"	      <tr>"+
"		<td align='right'><b>Nivel de estudios:</b></td>"+
"		<td>"+
"               <select name='nivestudios'>"+
"                <option value='1'>Primaria"+
"                <option value='2'>Ciclo Básico"+
"                <option value='3'>Bachillerato"+
"                <option value='4'>Utu"+
"               </select>"+
"               </td>"+
"	      </tr>"+
"	    </table><br>"+
"	    <b>Mensaje</b><br>"+
"	    <textarea name='mensaje' cols='45' rows='5'></textarea><br><br>"+

"	    <input type='submit' value='     Enviar     '>" + 
"&nbsp;" + "&nbsp;" +
"	    <input type='reset' value='     Borrar     '>"
"	    </form>";

document.getElementById("nombre").focus();

}


function Verificar() {
	if(document.frmDatosx.nombre.value == "") {
		alert("Por favor indica un Nombre");
		document.frmDatosx.nombre.focus();
		return false;
	}
	if(document.frmDatosx.localidad.value == "") {
		alert("Por favor indica una Localidad o Zona");
		document.frmDatosx.localidad.focus();
		return false;
	}
	if(document.frmDatosx.direccion.value == "") {
		alert("Por favor indica una Dirección");
		document.frmDatosx.direccion.focus();
		return false;
	}
	if(document.frmDatosx.telefono.value == "") {
		alert("Por favor indica un Teléfono");
		document.frmDatosx.telefono.focus();
		return false;
	}
	if(document.frmDatosx.email.value == "") {
		alert("Por favor indica un E-Mail");
		document.frmDatosx.email.focus();
		return false;
	}

	if(document.frmDatosx.mensaje.value == "") {
		alert("Por favor indica un Mensaje");
		document.frmDatosx.mensaje.focus();
		return false;
	}


	return true;
}

