function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero=0;
	
	

	while(contador>=0 && contador<5)
	{
		numero = prompt("Ingrese número");
		numero = parseInt(numero);
		contador++;
		acumulador=acumulador+numero;
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN