function mostrar()
{
    var NumeroUno;
    var NumeroDos;
    var suma;

    NumeroUno = prompt("Ingrese el primer número");
    NumeroDos = prompt("Ingrese el segundo número");
    
    if (NumeroUno == NumeroDos)
    {
        alert(NumeroUno+NumeroDos);
    }
   else if (NumeroUno > NumeroDos)
    {
        alert(NumeroUno/NumeroDos);
    }
    else
    {
        NumeroUno = parseInt(NumeroUno);
        NumeroDos = parseInt(NumeroDos);
        suma = (NumeroUno+NumeroDos);
        if (suma<50)
        {
            alert("La suma es: "+suma+" y es menor a 50");
        }
    }
    
}
