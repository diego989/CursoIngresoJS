function mostrar()
{//tomo la edad  
    var edad;
    var estadocivil;
    var opcion;

    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil");
    opcion = estadocivil.options [estadocivil.selectedIndex].value;
    
    if(edad<18 && opcion!=0){

        alert("Es muy pequeño para NO ser soltero.");
    }
    
    
    


}//FIN DE LA FUNCIÓN