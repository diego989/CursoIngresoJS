function mostrar()
{//Genero el número RANDOM entre 1 y 10 
	var num;

	num = Math.floor(Math.random()*(11-1))+1; 

	if(num>=9 && num<=10)
		{
			alert("EXCELENTE");
		}
			else if(num>=4)
				{
					alert("APROBO");
					}	

				else 
					{
						alert("Vamos, la próxima se puede");
						}

}//FIN DE LA FUNCIÓN