function mostrar()
{
    var Dia;

    Dia = prompt("Ingrese un dia de la semana");

    switch(Dia)
    {
        case "Lunes","lunes":
        case "Martes","martes":
        case "Miércoles","miércoles":
        case "Jueves","jueves":
        case "Viernes","viernes":
        {
        alert("A trabajar!");
        break;  
        }
        case "Sábado","sábado":
        case "Domingo","domingo":
        {
            alert("Buen finde!!");
            break;
        }
        default:
        {
            alert("No es un día válido");
            break;
        }
    }
}
