/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=1;
var NumeroDeUsuario;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor((Math.random()*100)+1);
	console.log(numeroSecreto);
	

}

function verificar()
{
	NumeroDeUsuario = document.getElementById("numero").value;
	NumeroDeUsuario = parseInt(NumeroDeUsuario);
	

	if (NumeroDeUsuario == numeroSecreto )
	{
		switch (contadorIntentos)
		{
			case 1:
				{
					alert("Usted es un psíquico!");
					document.getElementById("intentos").value = contadorIntentos;
					break;
				}
			case 2:
				{
					alert("Excelente percepción!");
					document.getElementById("intentos").value = contadorIntentos;
					break;
				}
			case 3:
				{
					alert("Esto es suerte!");
					document.getElementById("intentos").value = contadorIntentos;
					break;
				}
			case 4:
				{
					alert("Excelente técnica!");
					document.getElementById("intentos").value = contadorIntentos;
					break;
				}
			case 5:
				{
					alert("Usted está en la media");
					document.getElementById("intentos").value = contadorIntentos;
					break;
				}
			case 6:		
			case 7:
			case 8:
			case 9:
			case 10:
				{
					alert("Falta técnica!");
					document.getElementById("intentos").value = contadorIntentos;
					break;
				}		
			default:
				{
					alert("Afortunado en el amor!!!");
					document.getElementById("intentos").value = contadorIntentos;
					break;
				}						
		}
	}
	else if (NumeroDeUsuario>numeroSecreto)
	{
		alert("Usted se pasó!, siga intentando");
	}
	else
	{
		alert("Le falta poco para llegar al número");
	}

}

/*	{
		contadorIntentos++;

		if (NumeroDeUsuario == numeroSecreto && contadorIntentos==0)
		{
			alert("Usted es un psíquico!");
			document.getElementById("intentos").value = contadorIntentos;
		}
		else if (NumeroDeUsuario == numeroSecreto && contadorIntentos==1)
		{
			alert("Excelente percepción!");
			document.getElementById("intentos").value = contadorIntentos;

		}
		else if (NumeroDeUsuario == numeroSecreto && contadorIntentos==2)
		{
			alert("Esto es suerte!");
			document.getElementById("intentos").value = contadorIntentos;

		}
		else if(NumeroDeUsuario == numeroSecreto && contadorIntentos==3)
		{
			alert("Excelente técnica");
			document.getElementById("intentos").value = contadorIntentos;

		}
		else if(NumeroDeUsuario == numeroSecreto && contadorIntentos==4)
		{
			alert("Usted esta en la media.");
			document.getElementById("intentos").value = contadorIntentos;

		}
		else if(NumeroDeUsuario == numeroSecreto && (contadorIntentos>=6 && contadorIntentos<=10))
		{
			alert("Falta Técnica!");
			document.getElementById("intentos").value = contadorIntentos;

		}
		else if (NumeroDeUsuario == numeroSecreto && (contadorIntentos>10))
		{
			alert("Afortunado en el amor!")
			document.getElementById("intentos").value = contadorIntentos;

		}
	/*	else if (NumeroDeUsuario>numeroSecreto && (contadorIntentos>10))
		{
			alert("Usted se pasó, siga intentando");
		}
		else
		{
			alert("Usted está cerca, siga intentando");
		}*/
	
	


