/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
eleccionMaquina = Math.floor((Math.random()*3)+1);
console.log(eleccionMaquina);

function comenzar()
{
	
    

}//FIN DE LA FUNCIÓN
function piedra()
{
    switch (eleccionMaquina)
    {
        case 1:
            {
                alert("Usted empató");
                break;
            }
        case 2:
            {
                alert("Perdiste");
                break;
            }    
        case 3:
            {
                alert("Usted GANÓ!");
                break;
            }    
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    switch (eleccionMaquina)
    {
        case 1:
        {
            alert("Usted GANÓ!");
            break;
        }
        case 2:
        {
            alert("Usted empató");
            break;
        }    
        case 3:
        {
            alert("Perdiste");
            break;
        }    
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
    switch(eleccionMaquina)
    {
        case 1:
        {
            alert("Perdiste");
            break;
        }
        case 2:
        {
            alert("Usted GANÓ!");
            break;
        }
        case 3:
        {
            alert("Usted empató");
            break;
        }    
    }

}//FIN DE LA FUNCIÓN