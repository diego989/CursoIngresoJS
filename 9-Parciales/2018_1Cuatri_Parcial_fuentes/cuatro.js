function mostrar()
{
    var PrimerNum;
    var SegundoNum;
    var resultado;

    PrimerNum = prompt("Ingrese el primer número");

    SegundoNum = prompt("Ingrese el segundo número");
   
    if (PrimerNum == SegundoNum)
    {
        resultado=(PrimerNum+SegundoNum);
    }
    else 
    {  
        PrimerNum = parseInt(PrimerNum);
        SegundoNum = parseInt(SegundoNum);

        if (PrimerNum>SegundoNum)
        {
               
                resultado = PrimerNum-SegundoNum;
                
        }
    else 
         {
            resultado = PrimerNum+SegundoNum;
            if (resultado>10)
             { 
              resultado = "La suma es: "+resultado+ " y supera el 10";
             }
         }
    }
    alert(resultado);
}
