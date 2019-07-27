/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio=0;
var ColorRandom;
var ColorPantalla;
function comenzar()
{

    ColorSecreto = ["azul","verde","amarillo","celeste","marrón","rojo"];

    ColorRandom = Math.floor((Math.random()*ColorSecreto.length));
    ColorPantalla = ColorSecreto[ColorRandom];
    console.log(ColorPantalla);

    document.getElementById("ColorElejido").value = ColorPantalla;

    tiempoInicio = setInterval(function(){
        tiempoInicio++;
    }),1000;
    console.log(tiempoInicio);

	

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	
   


}//FIN DE LA FUNCIÓN
