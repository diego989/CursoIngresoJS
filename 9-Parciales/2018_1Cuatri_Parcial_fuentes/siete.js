function mostrar()
{ 
    var nota;
    var sexo;
    var i;
    var acumulador=0;
    var promedio=0;
    var notaMenor=0;
    var sexoNotaMenor;
    var cantidad=0;

    for (i=0 ; i<5 ; i++)
    {
        nota = prompt("Ingrese la nota del alumno/a");
        nota = parseInt(nota);
        while (nota<0 || nota>10)
        {
            nota = prompt("Ingrese la nota del alumno/a nuevamente");
            nota = parseInt(nota);
        }
        
        sexo = prompt ("Ingrese el sexo");
        while (sexo!="f" && sexo!="m")
        {
            sexo = prompt ("Ingrese el sexo nuevamente");
        }
        
        acumulador = acumulador + nota;
        

        if (i==0 || nota<notaMenor)
        {
            notaMenor = nota;
            sexoNotaMenor = sexo;
        }

        if (sexo=="m" && nota<=6)
        {
            cantidad++;
        }


    }

    promedio = (acumulador / i);

    alert("A) Promedio de las notas: "+promedio.toFixed(2)+"\n"+"B) La nota mas baja es: "+notaMenor+", su sexo es: "+sexoNotaMenor+"\n"+"C) La cantidad de varones con nota menores o igual a 6: "+cantidad);
    // \n
    // <br>

}
