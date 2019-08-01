function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;


	do
	{
		numero = prompt("Ingrese numero");
		while (isNaN(numero))
		{
			numero = prompt("Ingrese un número válido nuevamente");
		}
		numero = parseInt(numero);
		contador++;
		acumulador=acumulador+numero;
		respuesta = prompt("Ingrese si para cargar dato");
	}
	while (respuesta=="si");


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN