function mostrar()
{
    var Precio;
    var PorcentajeDescuento;
    var PrecioFinal;

    Precio = prompt("Indique precio del producto");
    Precio = parseInt(Precio);
    PorcentajeDescuento = prompt("Descuento a aplicar");
    PorcentajeDescuento = parseInt(PorcentajeDescuento);

    PrecioFinal = Precio-(Precio*PorcentajeDescuento/100);

    document.getElementById("elPrecioFinal").value = PrecioFinal;
}
