/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
var ColorRandom;
var ColorPantalla;
var tiempoFin;
var ColorElejido;
function comenzar()
{

    ColorSecreto = ["azul","verde","amarillo","celeste","marrón","rojo"];

    ColorRandom = Math.floor((Math.random()*ColorSecreto.length));
    ColorPantalla = ColorSecreto[ColorRandom];
    console.log(ColorPantalla);

    tiempoInicio = new Date();
    console.log(tiempoInicio);

    document.getElementById("ColorElejido").value = ColorPantalla;

	
}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	
   switch(colorParametro)
   {
       case "azul":
       case "amarillo":
       case "marron":
       case "verde":
       case "celeste":
       case "rojo":
       {
           tiempoFin = new Date();
           alert ("Tardaste:"+Number(((tiempoFin.valueOf()-tiempoInicio.valueOf())/1000)).toFixed(2)+" segundos");
           break;
       }
       default :
       {
           break;
       }
   }


}//FIN DE LA FUNCIÓN
