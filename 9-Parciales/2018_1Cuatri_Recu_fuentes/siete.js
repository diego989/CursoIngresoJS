function mostrar()
{
    var Nota;
    var Sexo;
    var NotaMasBaja;
    var SexoNotaBaja;
    var AcumuladorDeNotas=0;
    var ContadorVarones=0;
    var NotaVarones;
    var Promedio;
    var i;

    for (i=0;i<3;i++)
    {
        Nota = prompt("Ingrese la nota:");
        Nota = parseInt(Nota);
        while (Nota<0 || Nota>10)
        {
            Nota = prompt("Ingrese nota nuevamente: ");
        }

        Sexo = prompt("Indique el sexo: ");
        while (Sexo!="f" && Sexo!="m")
        {
            Sexo = prompt("Indique el sexo nuevamente: ");
        }

        AcumuladorDeNotas = AcumuladorDeNotas + Nota;

        if (i==0 ||Nota<NotaMasBaja)
        {
            NotaMasBaja = Nota;
            SexoNotaBaja = Sexo;
        }

        if (Nota>=6 && Sexo=="m")
        {
            ContadorVarones++;
        }
    }

    Promedio = AcumuladorDeNotas / i;

    if (ContadorVarones==0)
    {
        ContadorVarones=" No hay varones que cumplan estas especificaciones."
    }
    
    alert("A)El promdedio de notas totales es: "+Promedio.toFixed(2)+"\n"+"\n"+"B)La nota mas baja es: "+NotaMasBaja+", pertenece al sexo: "+SexoNotaBaja+"\n"+"\n"+"C)La cantidad de varones con nota mayor o igual a 6: "+ContadorVarones);
}
