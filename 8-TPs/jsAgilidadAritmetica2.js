/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var respuesta;
var Suma, Resta, Multiplicacion, Division;
function comenzar()
{
    var PrimerNumero;
    var OperacionesBasicas;
    var SegundoNumero;
    var OperadorRandom;
 

    PrimerNumero = Math.floor((Math.random()*10)+1);  
    document.getElementById("PrimerNumero").value = PrimerNumero ;

    SegundoNumero = Math.floor((Math.random()*10)+1); 
    document.getElementById("SegundoNumero").value = SegundoNumero ;

    OperacionesBasicas = Math.floor((Math.random()*4)+1);

    switch (OperacionesBasicas)
    {
        case 1:
        {
            document.getElementById("Operador").value = "Suma";
            Suma = PrimerNumero + SegundoNumero;
            console.log(Suma);
            break;
        }    
        case 2:
        {
            document.getElementById("Operador").value = "Resta";
            Resta = PrimerNumero - SegundoNumero;
            console.log(Resta);
            break;
        }
        case 3:
        {
            document.getElementById("Operador").value = "División";
            Division = PrimerNumero / SegundoNumero;
            console.log(Division);
            break;
        }    
        case 4:
        {
            document.getElementById("Operador").value = "Multiplicación";
            Multiplicacion = PrimerNumero * SegundoNumero;
            console.log(Multiplicacion);
            break;
        }
    }
   
	

}//FIN DE LA FUNCIÓN
function Responder()
{
    respuesta = document.getElementById("Respuesta").value;

    
    if ( respuesta == Suma || respuesta == Resta || respuesta == Multiplicacion || respuesta == Division )
    {
        alert("Respuesta Correcta!!!");
    }
    else
    {
        alert("Incorrecto! Intenta otro número o refresca la página.");
    }
    

}//FIN DE LA FUNCIÓN
