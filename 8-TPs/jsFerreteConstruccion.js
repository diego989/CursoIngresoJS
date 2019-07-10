/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo,ancho,cantidad;

    largo=document.getElementById("Largo").value;
    largo=parseInt(largo);

    ancho=document.getElementById("Ancho").value;
    ancho=parseInt(ancho);

    cantidad=(2*largo+2*ancho)*3;

    alert("La cantidad de alambre a necesitar es: "+cantidad);

}
function Circulo () 
{
    var radio,cantidad;

    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);

    cantidad=(radio/6.28)*3;
    cantidad=parseFloat(cantidad).toFixed(2);

    alert("Cantidad de alambre en el terreno circular a comprar: "+cantidad);
	
}
function Materiales () 
{
    var largo,ancho,area,cemento,cal;

    largo=document.getElementById("Largo").value;
    largo=parseInt(largo);

    ancho=document.getElementById("Ancho").value;
    ancho=parseInt(ancho);

    area=largo*ancho;
    cemento=area*2;
    cal=area*3;

    alert("Para este entrepiso necesitará: "+cemento+" bolsas de cemento/s");
    alert("Y necesitará: "+cal+" bolsas de cal");
	
}