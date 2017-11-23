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

var titulo  = '<h1>Formulario enviado correctamente !</h1>';

var linea1 =  'Gracias por contactarte con nosotros.';

var linea2 =  'Tus comentarios son de gran ayuda.';

var linea3 =  'En breve estaremos contactándonos contigo.';

var linea4 =  'Un cordial saludo, El equipo de Desarrollo.';

var linea5 =  'Presiona <a href=' + 'index.html' + '>AQUI </a> para regresar a página principal.';

var elemento = document.getElementById("cuerpo1");

elemento.innerHTML = titulo + '<p>'+ linea1 + '</p>' + '<p>'+ linea2 + '</p>' + '<p>'+ linea3 + '</p>' +
 '<p><i>'+ linea4 + '</i></p>' + '<p>'+ linea5 + '</p>';

}



