/*Recibir el id del formulario para poder manipular */
const FRM_HOJAS = document.querySelector("#frmHojas");

/*Genereamos el evento del formulario por el medio del boton submit*/
FRM_HOJAS.addEventListener("submit",calcularCosto);

function calcularCosto(event){
    //evita que la pagina cargue
    event.preventDefault();
    //recibir datos de caja de  texto
    let tipoHojas = document.querySelector("#selectarticulo").value;
    let cantidadHojas = document.querySelector("#txtcantidadObj").value;
    let presioHojas = parseFloat(document.querySelector("#txtprecio").value);
    let tipoPago = document.querySelector("#selectTipoPago").value;

    //calculando total 
    let subTotal,descuentoTotal,rebaja,descuentoAdcional,pagoFinal;
    let descuento = 0;
     switch(tipoHojas){
        case"hielo":
        subTotal = presioHojas*cantidadHojas
        rebaja =subTotal * .80
        descuentoTotal = subTotal-rebaja
        case"vigeta":
        subTotal = presioHojas*cantidadHojas
        rebaja =subTotal * .85
        descuentoTotal = subTotal-rebaja
        case"armazon":
        subTotal = presioHojas*cantidadHojas
        
        break;
      }
      let imprimirRes = document.getElementById("resultado");
      switch(tipoPago){
        case"efectivo":
        descuentoAdcional = rebaja * 0.07
        pagoFinal = rebaja - descuentoAdcional
        break;
        case "tarjeta":
            descuentoAdcional = 'No corresponde'
            pagoFinal = 'No corresponde'

        break;
      }
    
    
    
    //imprimendo resultados
    
    imprimirRes.textContent ="Producto= " + tipoHojas  + "  cantidad= " + cantidadHojas + " pz " + " Precio producto : $" +
     presioHojas + " Precio sin descuento $" + subTotal + " Descuento del producto $" + rebaja + " Descuento total $" + descuentoTotal + "Pago final $" +pagoFinal
}