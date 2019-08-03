function mostrar()
{
    var inicio;
    var animal;
    var peso;
    var temperatura;
    var temperaturasPares=0;
    var animalMasPesado;
    var nombreMasPesado;
    var tempMasPesado;
    var animalesMenorCero=0;
    var acumuladorInicial=0;
    var promedio;
    var pesoMaximo;
    var pesoMinimo;
    var i=0;

    do 
    {
        animal = prompt("Nombre del animal");

        peso = prompt("Indique peso:");
        peso = parseInt(peso);
        while (isNaN(peso) || peso<1 || peso>1000)
        {
            peso = prompt("ERROR"+"\n"+"Indique peso");
            peso = parseInt(peso);
        }

        temperatura = prompt("Temperatura del hábitat");
        temperatura = parseInt(temperatura);
        while (isNaN(temperatura) || temperatura<(-30) || temperatura>30)
        {
            temperatura = prompt("ERROR"+"\n"+"Temperatura del hábitat");
            temperatura = parseInt(temperatura);
        }

        if (temperatura%2==0)
        {
            temperaturasPares++;
        }

        if (i==0 || peso>animalMasPesado)
        {
            tempMasPesado = temperatura;
            nombreMasPesado = animal;
            animalMasPesado = peso;
        }

        if (temperatura<0)
        {
    
        if (animalesMenorCero==0 || peso>pesoMaximo)
        {
            pesoMaximo = peso;
        }

        if (animalesMenorCero==0 || peso<pesoMinimo)
        {
            pesoMinimo = peso;
        }
            animalesMenorCero++;
        }

        acumuladorInicial = acumuladorInicial+peso;
        i++;

        inicio = prompt("Presione N para salir");
    }
    while (inicio!="N");

    promedio = acumuladorInicial /i;

    if (animalesMenorCero==0)
    {
        animalesMenorCero = "No hay animales que vivan a estas temperaturas";
        pesoMaximo = "No hay datos";
        pesoMinimo = "No hay datos";
    }

    document.write("a) La cantidad de temperaturas pares: "+temperaturasPares+"<br>"+"b)1º El nombre del animal más pesado: "+nombreMasPesado+"<br>"+"b)2º La temperatura del animal más pesado: "+tempMasPesado+"<br>"+"c) La cantidad de animales que viven a menos de 0 grados: "+animalesMenorCero+"<br>"+"d) El promedio del peso de todos los animales: "+promedio.toFixed(2)+"<br>"+"f) El peso máximo de todos los animales cuyas temperaturas son bajo cero: "+pesoMaximo+"<br>"+"f) El peso mínimo de todos los animales cuyas temperaturas son bajo cero: "+pesoMinimo);

}
