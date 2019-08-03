function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var inicio;
    var i=0;
    var temperaturasPares=0;
    var marcaProducPesado;
    var menorCeroGrado=0;
    var acumuladorInicial=0;
    var promedio;
    var pesoMaximo, pesoMinimo;

    do 
    {
        marca = prompt("Indique la marca del producto");
        
        peso = prompt ("Ingrese su peso");
        peso = parseInt(peso);
        while (isNaN(peso) || (peso)<1 || (peso)>100)
        {
            peso = prompt ("ERROR"+"\n"+"Ingrese el peso");
            peso = parseInt(peso);
        }
        
        temperatura = prompt ("Indique temperatura de almacenamiento");
        temperatura = parseInt(temperatura);
        while (isNaN(temperatura) || (temperatura)<(-30) || (temperatura)>30)
        {
            temperatura = prompt ("ERROR"+"\n"+"Indique temperatura de almacenamiento");
            temperatura = parseInt(temperatura);
        }
        

        if (temperatura%2==0)
        {
            temperaturasPares++;
        }

        if (i==0 || peso>pesoMaximo)
        {
            pesoMaximo = peso;
            marcaProducPesado = marca;
        }

        if (i==0|| peso<pesoMinimo)
        {
            pesoMinimo = peso;
        }

        if (temperatura<0)
        {
            menorCeroGrado++;
        }

        acumuladorInicial = acumuladorInicial+ peso;

        inicio = prompt("Si desea salir presione N");

        i++;

    }

    while (inicio!="N");

    promedio = acumuladorInicial / i;

    if (temperaturasPares==0)
    {
        temperaturasPares = "No hay temperaturas pares";
    }

    document.write("a) La cantidad de temperaturas pares:"+temperaturasPares+"<br>"+"b) La marca del producto más pesado:"+marcaProducPesado+"<br>"+"c) La cantidad de productos que se conservan a menos de 0 grados:"+menorCeroGrado+"<br>"+"d) El promedio del peso de todos los productos:"+promedio.toFixed(2)+"<br>"+"f)1º El peso máximo:"+pesoMaximo+"<br>"+"f)2º El mínimo:"+pesoMinimo);
}
