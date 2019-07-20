var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;



function comenzar()
{
eleccionMaquina = Math.floor((Math.random()*3)+1);
console.log (eleccionMaquina);	//Genero el número RANDOM entre 1 y 3

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina)
    {
        case 1:
            {
				alert("Usted empató");
				ContadorDeEmpates++;
                break;
            }
        case 2:
            {
				alert("Perdiste");
				ContadorDePerdidas++
                break;
            }    
        case 3:
            {
				alert("Usted GANÓ!");
				ContadorDeGanadas++;
                break;
			}    
			
	}

mostrarResultado();
}//FIN DE LA FUNCIÓN
function papel()
{
	switch (eleccionMaquina)
    {
        case 1:
        {
			alert("Usted GANÓ!");
			ContadorDeGanadas++;
            break;
        }
        case 2:
        {
			alert("Usted empató");
			ContadorDeEmpates++;
            break;
        }    
        case 3:
        {
			alert("Perdiste");
			ContadorDePerdidas++;
            break;
        }    
	}
mostrarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina)
    {
        case 1:
        {
			alert("Perdiste");
			ContadorDePerdidas++;
            break;
        }
        case 2:
        {
			alert("Usted GANÓ!");
			ContadorDeGanadas++;
            break;
        }
        case 3:
        {
			alert("Usted empató");
			ContadorDeEmpates++;
            break;
        }    
	}
mostrarResultado();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("empatadas").value = ContadorDeEmpates;	
}