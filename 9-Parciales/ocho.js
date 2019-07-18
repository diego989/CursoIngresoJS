function mostrar()
{

    var letra;
    var numero;
    var ingreso;
    var NumPares=0;
    var NumImpares=0;
    var Ceros=0;
    var NumPositivos=0;
    var ContNumPositivos=0;
    var NumNegativos=0;
    var Minimo=0;
    var Maximo=0;
    var letraMaximo;
    var letraMinimo;
    var i=0;
    var promedio=0;


    ingreso = prompt("¿Desea cargar datos?" +"\n"+ "Presione "+"s "+ "para continuar"+"\n"+"Si desea salir presione cualquier tecla");
  
    
    while (ingreso =="s")
    {   
        
        letra = prompt("Ingrese una letra");
        numero = prompt("Ingrese un número");
        numero = parseInt(numero);
        while (numero<-100 || numero>100)
        {
            numero = prompt("Ingrese un número válido");
        }

        if (numero % 2 == 0)
        {
            NumPares++;
        }
        else
        {
            NumImpares++;
        }

        if (numero == 0)
        {
            Ceros++;
        }

        else if (numero>0)
        {
            NumPositivos = NumPositivos+numero;
            ContNumPositivos++;
        }

        else 
        {
            NumNegativos = NumNegativos+numero;
        }

      
        if (i==0 || numero>Maximo)
        {
            Maximo = numero;
            letraMaximo = letra;
            
        }
        if (i==0 || numero<Minimo )
        {
            Minimo = numero;
            letraMinimo = letra;
            i=1;
        }
    

        ingreso = prompt("¿Desea cargar datos?" +"\n"+ "Presione "+"s "+ "para continuar"+"\n"+"Si desea salir presione cualquier tecla");
    }

    promedio = NumPositivos/ContNumPositivos;

    document.write("A)La cantidad de números pares: "+NumPares+"<br>"+"B)La cantidad de números impares es: "+NumImpares+"<br>"+"C)La cantidad de ceros es: "+Ceros+"<br>"+"D)El promedio de los numero positivos es: "+promedio.toFixed(2)+"<br>"+"E)La suma de los números negativos es: "+NumNegativos+"<br>"+"F)El número "+Maximo+" es el máximo, junto a la letra "+letraMaximo+"<br>"+"El número "+Minimo+" es el mínimo, junto a la letra "+letraMinimo);
}
