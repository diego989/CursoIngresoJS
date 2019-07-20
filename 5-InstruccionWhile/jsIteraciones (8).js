function mostrar()
{

	var positivo=0;
	var negativo=1;
	var numero;
	var producto;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);
		if (numero>0)
		{
			positivo=positivo+numero;
		}
		else
		{
			negativo=negativo*numero;	
		}
		respuesta = prompt("Escriba si para cargar un numero");
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN