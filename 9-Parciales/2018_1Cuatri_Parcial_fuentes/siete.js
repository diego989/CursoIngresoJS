function mostrar()
{
    var nota;
    var sexo;
    var i;
    var acumulador;
    var promedio;
    var notaBaja;
    var sexoNotaBaja;
    var cantidad;

    for (i=0 ; i<1 ; i++)
    {
        nota = prompt("Ingrese la nota del alumno/a");
        nota = parseInt(nota);
        while (nota<0 || nota>10)
        {
            nota = prompt("Ingrese la nota del alumno/a nuevamente");
        }
        
        sexo = prompt ("Ingrese el sexo");
        while (sexo!="f" && sexo!="m")
        {
            sexo = prompt ("Ingrese el sexo nuevamente");
        }
        
        acumulador = nota + nota;
        if (nota<nota)
        {
            notaBaja = nota;
            sexoNotaBaja = sexo;
        }

        if (sexo=="m" && nota>=6)
        {
            cantidad++;
        }


    }

    promedio = acumulador / i;

    alert("A) Promedio de las notas: "+promedio+"\n"+"B) La nota mas baja es: "+notaBaja+", su sexo es: "+sexoNotaBaja+"\n"+"C) La cantidad de varones con nota menores o igual a 6: "+cantidad);
    // \n
    // <br>
}
