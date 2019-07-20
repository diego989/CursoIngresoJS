function mostrar()
{

	var contador=0;
	var numero;
	var SumPositivo=0;
	var SumNegativo=0;
	var AcumuladorPositivos=0;
	var AcumuladorNegativo=0;
	var ceros=0;
	var NumPares=0;
	var PromedioPositivo=0;
	var PromedioNegativo=0;
	var Diferencia=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);

		if (numero<0)
		{
			SumNegativo=SumNegativo+numero;
			AcumuladorNegativo++;
		}
		else
		{
			SumPositivo=SumPositivo+numero;
			AcumuladorPositivos++;
		}
		if (numero==0)
		{
			ceros++;
		}
		
		if (numero %2 == 0)
		{
			NumPares++;
		}

		respuesta = prompt("Ingrese no si desea salir");
	}

PromedioPositivo = SumPositivo/AcumuladorPositivos;
PromedioNegativo = SumNegativo/AcumuladorNegativo;
Diferencia = SumPositivo+SumNegativo;

document.write ("1)La suma de los negativos es: "+SumNegativo+"<br>"+"2)La suma de los positivos es:"+SumPositivo+"<br>"+"3)La cantidad de positivos es:"+AcumuladorPositivos+"<br>"+"4)La cantidad de negativos es:"+AcumuladorNegativo+"<br>"+"5)La cantidad de ceros es:"+ceros+"<br>"+"6)La cantidad de numeros pares es:"+NumPares+"<br>"+"7)El promedio de los positivos es:"+PromedioPositivo+"<br>"+"8)El promedio de los negativos es:"+PromedioNegativo+"<br>"+"9)La diferencia entre los positivos y los negativos es:"+Diferencia);


}//FIN DE LA FUNCIÓN