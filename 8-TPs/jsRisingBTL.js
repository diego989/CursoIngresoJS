/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
  
    var Edad, Sexo, EstadoCivil, SdoBruto, NumLegajo, Nacionalidad;
   
    Edad = prompt("Ingrese la edad");
    while (isNaN(Edad) || parseInt(Edad)<18 || parseInt(Edad)>90)
    {
        Edad = prompt("Ingrese una edad válida");
    }
    Edad = parseInt (Edad);

    document.getElementById("Edad").value = Edad;

    Sexo = prompt("Indique sexo");
    while (Sexo!="F" && Sexo!="M")
    {
        Sexo = prompt("Sexo no válido, ingrese de nuevo");
    }
    document.getElementById("Sexo").value = Sexo;

    EstadoCivil = prompt("Indique su Estado Civil"+"\n"+"1-para soltero"+"\n"+"2-para casados"+"\n"+"3-para divorciados"+"\n"+"4-para viudos");
    while (isNaN(EstadoCivil) || parseInt(EstadoCivil)<1 || parseInt(EstadoCivil)>4)
    {
        EstadoCivil = prompt("Elección inválida"+"\n"+"Indique su Estado Civil"+"\n"+"1-para soltero"+"\n"+"2-para casados"+"\n"+"3-para divorciados"+"\n"+"4-para viudos");
    }
    document.getElementById("EstadoCivil").value = EstadoCivil;

    SdoBruto = prompt ("¿Cuál es su Sueldo Bruto?");
    while (isNaN(SdoBruto) || parseInt(SdoBruto)<8000)
    {
        SdoBruto = prompt("El sueldo bruto debe ser no menor a $8000");
    }
    document.getElementById("Sueldo").value = SdoBruto;

    NumLegajo = prompt ("Ingrese el número de legajo");
    while(isNaN(NumLegajo) || validarLegajo(NumLegajo)==false)
    {
        NumLegajo = prompt("Error, ingrese legajo nuevamente");
    }
    document.getElementById("Legajo").value = NumLegajo;

    Nacionalidad = prompt("Indique su nacionalidad"+"\n"+"“A” para argentinos"+"\n"+"“E” para extranjeros"+"\n"+"“N” para nacionalizados");
    switch (Nacionalidad)
    {
        case "A":
        {
            Nacionalidad = "Argentino/a";
            break;
        }
        case "E":
        {
            Nacionalidad = "Extranjero/a";
            break;
        }    
        case "N":
        {
            Nacionalidad = "Nacionalizado/a";
            break;
        }
        default :
        {
            Nacionalidad = prompt("ERROR"+"\n"+"Indique su nacionalidad"+"\n"+"“A” para argentinos"+"\n"+"“E” para extranjeros"+"\n"+"“N” para nacionalizados");
            while (Nacionalidad!= "A" && Nacionalidad!= "N" && Nacionalidad!="N")
            {
                Nacionalidad = prompt("ERROR"+"\n"+"Indique su nacionalidad"+"\n"+"“A” para argentinos"+"\n"+"“E” para extranjeros"+"\n"+"“N” para nacionalizados");
            }
            break;
        }        
    }
    document.getElementById("Nacionalidad").value = Nacionalidad;
}
function validarLegajo(Legajo)
{
    if (Legajo.length!=4)
    {
        return false;
    }
    else if (Legajo[0]=="0")
    {
        return false;
    }
   return true;
}