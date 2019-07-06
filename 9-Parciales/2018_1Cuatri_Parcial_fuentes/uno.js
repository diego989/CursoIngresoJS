
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = prompt("Ingrese el ancho del rectangulo: ");
    ancho = parseInt(ancho);

    largo = prompt("Ingrese el largo del rectangulo: ");
    largo = parseInt(largo);

    perimetro = ancho+largo*2;

    alert("El Perímetro del recrángulo es: "+perimetro);

}
