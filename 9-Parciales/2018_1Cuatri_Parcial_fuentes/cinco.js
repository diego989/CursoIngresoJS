function mostrar()
{

    var planetas;
    var leyenda;

    planetas = prompt("Ingrese un planeta");

    switch (planetas)
    {
        case "mercurio":
        case "venus": 
            {
                leyenda="Acá hace mas calor";
                break;
            }   
        case "tierra":   
            {
                leyenda="Acá vivimos";
                break;
            }    
        case "marte":       
        case "jupiter":  
        case "saturno":
        case "urano":
        case "neptuno":  
            {
                leyenda="Acá hace mas frío";
                break;
            }
        
        default:
            {
                leyenda="Planeta inválido";
                break;
            }    
    }
alert(leyenda);            
}
