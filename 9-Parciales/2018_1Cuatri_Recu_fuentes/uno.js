
function mostrar()
{
    var Ancho;
    var Largo;
    var Perimetro;

    Ancho = prompt("Ingrese el ancho del rectángulo");
    Ancho = parseInt(Ancho);
    Largo = prompt("Ingrese el largo del rectángulo");
    Largo = parseInt(Largo);

    Perimetro = (Ancho + Largo) *2;
    alert("El peímetro del rectángulo es: "+Perimetro);
}
