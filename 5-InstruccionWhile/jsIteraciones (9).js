function mostrar()
{

	var contador=0;
	var numero;
	var NumMaximo;
	var NumMinimo;
	var i=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);

		if (i==0 || numero>NumMaximo)
		{
			NumMaximo=numero;
		}

		if (i==0 || numero<NumMinimo)
		{
			NumMinimo=numero;
			i=1;
		}

		respuesta = prompt("Escriba no para salir");
	
	}

document.getElementById("maximo").value=NumMaximo;
document.getElementById("minimo").value=NumMinimo;


}//FIN DE LA FUNCIÓN