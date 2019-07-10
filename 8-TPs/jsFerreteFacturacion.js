/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1,precio2,precio3,total;

    precio1=document.getElementById("PrecioUno").value;
    precio1=parseInt(precio1);

    precio2=document.getElementById("PrecioDos").value;
    precio2=parseInt(precio2);

	precio3=document.getElementById("PrecioTres").value;
    precio3=parseInt(precio3);

    total = precio1+precio2+precio3;

    alert ("La suma de los precios es: "+total);

}
function Promedio () 
{   
    var precio1,precio2,precio3,promedio;
    
    precio1=document.getElementById("PrecioUno").value;
    precio1=parseInt(precio1);

    precio2=document.getElementById("PrecioDos").value;
    precio2=parseInt(precio2);

    precio3=document.getElementById("PrecioTres").value;
    precio3=parseInt(precio3);

    promedio = precio1/3+precio2/3+precio3/3;

    alert("El promedio es: "+promedio);

}
function PrecioFinal () 
{
    var precio1,precio2,precio3,suma,preciofinal;

    precio1=document.getElementById("PrecioUno").value;
    precio1=parseInt(precio1);

    precio2=document.getElementById("PrecioDos").value;
    precio2=parseInt(precio2);

    precio3=document.getElementById("PrecioTres").value;
    precio3=parseInt(precio3);

    suma = precio1+precio2+precio3;
    preciofinal = suma+suma*21/100;

    alert("El precio final con IVA es: "+preciofinal)
	
}