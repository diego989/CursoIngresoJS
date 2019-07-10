function mostrar()
{//tomo la edad  
    var edad;
    var estadocivil;
    var opcion;

    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;
    opcion = estadocivil.options [estadocivil.selectedIndex].value;
    
    if(edad>=18&&opcion==0)
        {

            alert("Es soltero y no es menor.");
         }
    
	


}//FIN DE LA FUNCIÓN