function mostrar()
{
    var precio;
    var descuento;
    var preciofinal;

    precio = prompt("Ingrese el precio: ");
    precio = parseInt(precio);

    descuento = prompt("Ingrese el descuento a aplicar: ");
    descuento = parseInt(descuento);

    preciofinal = precio-precio*descuento/100;

    document.getElementById("elPrecioFinal").value = preciofinal;

}
