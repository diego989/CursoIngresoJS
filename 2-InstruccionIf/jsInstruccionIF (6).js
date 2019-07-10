function mostrar()
{//tomo la edad
    var edad;
    edad=document.getElementById("edad").value;
    
    if (edad>=18)
        {
            alert("Usted es mayor de edad");
        }
    else if (edad>=13 && edad<=17)
        {
            alert("Es usted adolescente");
        }    

        else
            {       
                alert("Es menor de 13 años");
                }    



}//FIN DE LA FUNCIÓN