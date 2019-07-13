/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*function CalcularPrecio () 
{
     var cantidad;
     var precio=35;
     var precioFinal;
     var marca;
     var iibb;
     var descuento;
     var resultado;
    
 

     cantidad=document.getElementById("Cantidad").value;//Tomar CANTIDAD DE LAMPARAS//
     cantidad=parseInt(cantidad);//PASARLO A ENTEROS//

     marca=document.getElementById("Marca").value;//TOMAR MARCA DE LAMPARITA//
     
 
     if(cantidad>=6)//Evalúo cantidades//
     {
        descuento=50;
           
     }
     else if(cantidad==5)
            {
            
                if(marca=="ArgentinaLuz")//Evalúo marcas dentro de esa cantidad//
                    {
                    descuento=40;
                    }
                else
                    { 
                        descuento=30;
                        
                    }
            }
            else if (cantidad==4 )
                    {
                        if(marca=="ArgentinaLuz" || marca == "FelipeLamparas")
                            {
                                descuento=25; 
                            }
                        else
                            {
                                descuento=20;
                                
                            }
                    }
            else if(cantidad==3) 
                    {
                        if(marca=="ArgentinaLuz")
                            {
                                descuento=15;
                            
                            }
                     else if(marca=="FelipeLamparas")
                            {
                                descuento=10;
                            
                            }
                        else
                            {
                                descuento=5;
                            }    
                    }    
            else
                {
                    descuento=0;
                    
                }
     precioFinal=cantidad*precio;//Valor sin descuento//                
     resultado=precioFinal-(precioFinal*descuento/100);//Valor con descuento aplicado//
     document.getElementById("precioDescuento").value="$"+resultado;

            if(resultado>120)
                {
                    iibb=resultado*0.1;
                    alert("Usted paga: $"+iibb+" por percepción de IIBB");
                }
     
}*/

/*function CalcularPrecio ()
{
     var cantidad;
     var precio=35;
     var precioFinal;
     var marca;
     var iibb;
     var descuento;
     var resultado;

     cantidad = document.getElementById("Cantidad").value;
     cantidad = parseInt(cantidad);

     marca = document.getElementById("Marca").value;

     switch (marca)
     {
         case "ArgentinaLuz":
            {
                if (cantidad>6)
                 {
                     descuento=50;
                 }
                else if (cantidad==5)
                        {
                            descuento=40;
                        }
                else if (cantidad==4)
                        {
                            descuento=25;
                        }
                else if (cantidad==3)
                        {
                            descuento=15;
                        }
                else 
                        {
                            descuento=0;
                        }        
                break; 
            }
         case "FelipeLamparas":
            {
                if (cantidad>6)
                 {
                     descuento=50;
                 }
                else if (cantidad==5)
                        {
                            descuento=30
                        } 
                else if (cantidad==4)
                        {
                            descuento=25;
                        } 
                else if (cantidad==3)
                        {
                            descuento=10;
                        }
                else 
                        {
                            descuento=0;
                        }
                break;
            }
         case "JeLuz":
            {
                if (cantidad>6)
                 {
                     descuento=50;
                 }
                else if (cantidad==5)
                        {
                            descuento=30;
                        } 
                else if (cantidad==4)
                        {
                            descuento=20;
                        } 
                else if (cantidad==4)
                        {
                            descuento=5;
                        }          
                else 
                    {
                        descuento=0;
                    }              
                break;
            }
         case "HazIluminacion":
         {
            if (cantidad>6)
             {
                 descuento=50;
             }
            else if (cantidad==5)
                    {
                        descuento=30;
                    } 
            else if (cantidad==4)
                    {
                        descuento=20;
                    } 
            else if (cantidad==4)
                    {
                        descuento=5;
                    }          
            else 
                {
                    descuento=0;
                }              
            break;
        }
         case "Osram":
         {
            if (cantidad>6)
             {
                 descuento=50;
             }
            else if (cantidad==5)
                    {
                        descuento=30;
                    } 
            else if (cantidad==4)
                    {
                        descuento=20;
                    } 
            else if (cantidad==4)
                    {
                        descuento=5;
                    }          
            else 
                {
                    descuento=0;
                }              
            break;
        }
     }
     precioFinal=cantidad*precio;//Valor sin descuento//                
     resultado=precioFinal-(precioFinal*descuento/100);//Valor con descuento aplicado//
     document.getElementById("precioDescuento").value="$"+resultado;

            if(resultado>120)
                {
                    iibb=resultado*0.1;
                    alert("Usted paga: $"+iibb+" por percepción de IIBB");
                } 
}*/

function CalcularPrecio ()
{
     var cantidad;
     var precio=35;
     var precioFinal;
     var marca;
     var iibb;
     var descuento;
     var resultado;

     cantidad = document.getElementById("Cantidad").value;
     cantidad = parseInt(cantidad);

     marca = document.getElementById("Marca").value;
     
     switch (marca)
        {
            case "ArgentinaLuz":
                {
                    switch (cantidad)
                        {
                            case 1:
                            case 2:
                                {
                                    descuento=0;
                                    break;
                                }
                            case 3:
                                {
                                    descuento=15;
                                    break;
                                }    
                            case 4:
                                {
                                    descuento=25;
                                    break;
                                }    
                            case 5:
                                {
                                    descuento=40;
                                    break;
                                }    
                            default:
                                {
                                    descuento=50;
                                    break;
                                }    
                        }
                break;        
                }
            case "FelipeLamparas":
                {
                    switch (cantidad)
                        {
                            case 1:
                            case 2:
                                {
                                    descuento=0;
                                    break;
                                }
                            case 3:
                                {
                                    descuento=10;
                                    break;
                                }  
                            case 4:
                                {
                                    descuento=25;
                                    break;
                                }      
                            case 5:
                                {
                                    descuento=30;
                                    break;
                                }    
                            default:
                                {
                                    descuento=50;
                                    break;
                                }     
                        }
                break;        
                } 
            case "JeLuz":
            case "HazIluminacion":
            case "Osram":
                {
                    switch(cantidad)
                        {
                            case 1:
                            case 2:
                                {
                                    descuento=0;
                                    break;
                                }
                            case 3:
                                {
                                    descuento=5;
                                    break;
                                }    
                            case 4:
                                {
                                    descuento=20;
                                    break;
                                }    
                            case 5:
                                {
                                    descuento=30;
                                    break;
                                }    
                            default:
                                {
                                    descuento=50;
                                    break;
                                }    
                        }
                break;
                }       
        }
    precioFinal=cantidad*precio;//Valor sin descuento//                
    resultado=precioFinal-(precioFinal*descuento/100);//Valor con descuento aplicado//
    document.getElementById("precioDescuento").value="$"+resultado;

    if(resultado>120)
        {
            iibb=resultado*0.1;
            alert("Usted paga: $"+iibb+" por percepción de IIBB");
        }        
}